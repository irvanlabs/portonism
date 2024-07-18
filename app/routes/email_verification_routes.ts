import EmailVerificationsController from "#controllers/verification/email_verifications_controller";
import router from "@adonisjs/core/services/router";

//Email Verification routes
export const EmailVerificationRoutes = ()=>{
    router.group(()=>{
      router.post('/verify', [EmailVerificationsController, 'verifyEmail'])
    }).prefix('/email');
}