import RolesController from "#controllers/role/roles_controller"
import { middleware } from "#start/kernel"
import router from "@adonisjs/core/services/router"

export const RolesRoutes = ()=>{
    router.get('/roles', [RolesController, 'getAllRoles']).use(middleware.auth());
    router.group(()=>{
        router.put('/update', [RolesController,'updateUserRole']).use(middleware.auth());
    }).prefix('/role')
}