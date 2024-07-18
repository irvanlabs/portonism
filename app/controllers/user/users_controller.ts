import type { HttpContext } from '@adonisjs/core/http'

import { inject } from "@adonisjs/core";
import UserService from '#services/user/user_service';
import { createUserValidator, resetPasswordValidator, updateUserValidator } from '#validators/user';

@inject()
export default class UsersController {
    constructor(private userService: UserService){}

    async create({request}: HttpContext){
        let data = await request.validateUsing(createUserValidator)
        return await this.userService.register(data)
    }
    async info({request}: HttpContext){
        let user_id = request.user.id
        console.log(request.user)
        return await this.userService.getUserById(user_id)
    }

    async update({request}: HttpContext){
        let user_id = request.user.id
        let data = await request.validateUsing(updateUserValidator)
        return await this.userService.updateUser(user_id, data) 
    }

    async passwordChange({request}: HttpContext){
        let user_id = request.user.id
        let data = await request.validateUsing(resetPasswordValidator)
        return await this.userService.resetPassword(user_id, data)
    }

    async emailVerification({request}: HttpContext){
        let user = request.user
        return await this.userService.verifyEmail(user)
    }
}