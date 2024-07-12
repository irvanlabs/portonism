import AuthController from "#controllers/auth/auth_controller";
import router from "@adonisjs/core/services/router";

//AUTH routes
export const AuthRoutes = ()=>{
    router.group(()=>{
      router.post('login', [AuthController, 'login'])
    }).prefix('/auth');
}