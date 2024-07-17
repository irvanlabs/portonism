import UsersController from "#controllers/user/users_controller"
import { middleware } from "#start/kernel"
import router from "@adonisjs/core/services/router"

  // USER routes
export const UserRoutes = () =>{
  router.group(()=>{
        router.get('/', ()=> {hello: 'world'})
        router.post('/register', [UsersController, 'create'])
        router.get('/test', [UsersController, 'test']).use(middleware.auth())
        router.put('/update', [UsersController, 'update']).use(middleware.auth())
        router.put('/password-reset', [UsersController, 'passwordChange']).use(middleware.auth())
    }).prefix('/user') 
}