import app from "@adonisjs/core/services/app"
import { PrismaClient } from "@prisma/client/extension"
import { CreateUserDTO } from "./user_dto.js"
import { BadRequestException } from "#exceptions/exceptions"
import bcrypt from "bcrypt"
const prisma: PrismaClient = await app.container.make('prisma:db')

export default class UserService{
    async getUser(email){
        let user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        return user
    }
    
    async register(data: CreateUserDTO){
        let user = await this.getUser(data.email)
        if(user){
            console.log(user)
            throw new BadRequestException(`User ${data.email} already registered`)
        }
        // console.log(data)
        if(data.password !== data.password_confirmation) {
            return new BadRequestException('Registration Failed, Password Confirmation Missmatch')
        }
        try{
            const hash = await bcrypt.hash(data.password, 7)
            const user = await prisma.user.create({
                data: {
                    password: hash,
                    email: data.email,
                    username: data.email.split('@')[0],
                    fullname: data.fullname,
                }
            })

            return user
        } catch(e: any){
            console.log(e)
            return new Error(e)
        }
    }
}