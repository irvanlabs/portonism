import UsersController from "#controllers/user/users_controller"
import router from "@adonisjs/core/services/router"

  // USER routes
export const UserRoutes = () =>{
    router.group(()=>{
        router.post('/register', [UsersController, 'create'])
        router.get('/', ()=> "hello world")
    }).prefix('/user') 
}