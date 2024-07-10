import type { HttpContext } from '@adonisjs/core/http'

import { inject } from "@adonisjs/core";
import UserService from '#services/user/user_service';
import { createUserValidator } from '#validators/user';

@inject()
export default class UsersController {
    constructor(private userService: UserService){}

    async create({request}: HttpContext){
        let data = await request.validateUsing(createUserValidator)
        return await this.userService.register(data)
    }
    // async login({request}: HttpContext){
    //     let req = await request.validateUsing(userLoginValidator)

    //     return await this.userService.login(req)
    // }
}