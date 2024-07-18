import EmailVerificationService from '#services/verification/email_verification_service';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class EmailVerificationsController {
    constructor(
        private emailVerificationService: EmailVerificationService
    ){}
    async verifyEmail({request}: HttpContext){
        let {token}  = request.body()
        return await this.emailVerificationService.verify(token);
    }
}