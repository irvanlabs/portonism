import { CreateUserDTO, LoginUserDTO, resetPasswordDTO, updateUserDTO } from "./user_dto.js"
import { BadRequestException, UnauthorizedException } from "#exceptions/exceptions"
import hash from '@adonisjs/core/services/hash'
import User from "#models/user_model"
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import { inject } from "@adonisjs/core"
import  ProfileService from "#services/profile/profile_service"
import UserPlan from "#models/user_plan_model"
import { DateTime } from "luxon"

@inject()
export default class UserService{
    
    constructor(
        private profileService: ProfileService
    ){}

    async getUser(email){
        let user = await User.findBy('email', email)
        return user
    }

    async authLogin(data:LoginUserDTO){
        const users = await User.query().preload('role').where('email', data.email).first()
        if (!users) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const passwordValidation = await hash.verify(users.password, data.password)
        if (!passwordValidation) {
          throw new UnauthorizedException('Invalid credentials');
        }
        const roles = users.role.name
        let payload = { 
            id: users.id, 
            email: users.email, 
            roleId: users.roleId, 
            roles: [roles]
        }

        return payload
    }

    async getUserById(user_id: number){
        let user = await User.findByOrFail({
            id: user_id
        })
        return user
    }
    
    async register(data: CreateUserDTO){
        let user = await this.getUser(data.email)
        if(user){
            throw new BadRequestException(`User ${data.email} already registered`)
        }
        if(data.password !== data.password_confirmation) {
            return new BadRequestException('Registration Failed, Password Confirmation Missmatch')
        }
        try{
            let hashed = await hash.make(data.password);
            let uuidTrimmed =  _.replace(uuidv4().toString(), /-/g, '' )
            const user = await User.create({
                    password:  hashed,
                    email: data.email,
                    username: data.email.split('@')[0],
                    fullname: data.fullname,
                    uuid: uuidTrimmed,
            });
            await this.profileService.createProfile(user.id)

            let expiry = DateTime.fromISO('2077-07-07T00:00:00.000Z');

            await UserPlan.create({
                userId: user.id,
                planId: 1,
                expiredAt: expiry
            })            
            return user
        } catch(e: any){
            console.log(e)
            return new Error(e)
        }
    }

    async updateUser(user_id: number, data: updateUserDTO){
        let user = await User.findByOrFail({
            id: user_id
        })

        if(data.password !== data.password_confirmation) {
            throw new BadRequestException('Failed, Password Confirmation Missmatch')
        } 

        let hashed = data.password ?  await hash.make(data.password) : ''
        user.merge({
            fullname: data.fullname,
            username: data.username,
            email: data.email,
            password: hashed ? hashed : user.password,
            phoneNumber: data.phone_number,
            isEmailVerified: (data.email && data.email === user.email) ? user.isEmailVerified : false,
            isPhoneVerified: (data.phone_number && data.phone_number === user.phoneNumber) ? user.isPhoneVerified : false
          });

        user.save()
        return user
    }

    async resetPassword(user_id: number, data: resetPasswordDTO){
        let user = await User.findByOrFail({
            id: user_id,
        })
        if(data.password !== data.password_confirmation) {
            throw new BadRequestException('Failed, Password Confirmation Missmatch')
        } 
        let hashed = data.password ?  await hash.make(data.password) : ''
        user.merge({
            password: hashed ? hashed : user.password,
        })
        user.save()
        return user
    }

    async getUserEducation(uuid: string){
        let userEducation = await User.query()
        .where('uuid', uuid)
        .preload('educations')
        .firstOrFail()

        return userEducation;
    }

    async getUserExperience(uuid: string){
        let experience = await User.query()
        .where('uuid', uuid)
        .preload('experiences')
        .firstOrFail()

        return experience;
    }

    async updateUserRole(user_id: number, role_id: number){
        let user = await User.findByOrFail({
            user_id: user_id
        })

        user.merge({
            roleId: role_id
        })

        await user.save()
        return user;
    }

}