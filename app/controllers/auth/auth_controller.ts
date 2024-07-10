import { AuthService } from '#services/auth/auth_service'
import { loginValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'


@inject()
export default class AuthController {
    constructor(
        private authService: AuthService
    ){}
    async login({request}: HttpContext){
        let data = await request.validateUsing(loginValidator)
        return await this.authService.login(data)
    }
}