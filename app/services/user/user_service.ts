import { CreateUserDTO } from "./user_dto.js"
import { BadRequestException } from "#exceptions/exceptions"
import hash from '@adonisjs/core/services/hash'
import User from "#models/user_model"
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'

export default class UserService{
    async getUser(email){
        let user = await User.findBy('email', email)
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
                    uuid: uuidTrimmed
            });
            return user
        } catch(e: any){
            console.log(e)
            return new Error(e)
        }
    }

    async getUserEducation(uuid: string){
        let userEducation = await User.query()
        .where('uuid', uuid)
        .preload('educations')
        .firstOrFail()

          return userEducation;
    }
}