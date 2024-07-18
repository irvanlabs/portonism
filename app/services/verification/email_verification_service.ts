import { BadRequestException } from "#exceptions/exceptions";
import { userDTO } from "#services/user/user_dto";
import env from "#start/env";
import mail from "@adonisjs/mail/services/main";
import { emailVerificationTemplate } from "../../templates/email_templates/email_verification.js";
import moment from "moment";
import crypto from "crypto";
import User from "#models/user_model";
import EmailVerification from "#models/email_verification_model";
import { DateTime } from "luxon";
export default class EmailVerificationService {
    private async generateVerificationEmail(user_id:number){
        const expired_date = moment().add(1, 'days').toISOString();
        const expiredAt = DateTime.fromISO(expired_date)
        const token = crypto.randomBytes(24).toString('hex');

        await EmailVerification.create({
            userId: user_id,
            token: token,
            expiresAt: expiredAt,
            isVerified: false
        })

        return {token: token, expired_at: expired_date}
    }

    async generateVerification(user:userDTO){
        let user_data = await User.findByOrFail({id: user.id});
        let {token, expired_at} = await this.generateVerificationEmail(user_data.id)

        if(user_data.isEmailVerified===true){
            throw new BadRequestException(`Email ${user_data.email} is already verified`);
        }


        let url = `http://${env.get('APP_URL')}/email/verify?token=${token}`
        let email_template = emailVerificationTemplate(
            `${env.get('APP_STATIC_URL')}/image/logo.png`,
            user_data.fullname,
            url,
            env.get('APP_NAME'),
            moment().year()
        )

        await mail.send((message)=>{
            message
            .to(user_data.email)
            .from(env.get('MAIL_FROM_ADDRESS'))
            .subject(`${env.get('APP_NAME')}: Verify email address`)
            .html(email_template)
        })

        return {expired_at}
    }

    async verify(token: string){
        let email_verification = await EmailVerification.findByOrFail({
            token: token,
            isVerified: false,
        })

        let user = await User.findByOrFail({
            id: email_verification.userId
        })

        if(moment().isAfter(email_verification.expiresAt)) {
            throw new BadRequestException(`Email verification link expired`)
        }

        email_verification.merge({
            isVerified: true
        })
        user.merge({
            isEmailVerified: true,
        })

        await email_verification.save()
        await user.save()

        return "OK"
    }
}