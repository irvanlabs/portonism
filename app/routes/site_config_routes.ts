import UsersSiteConfigsController from "#controllers/site/users_site_configs_controller"
import { middleware } from "#start/kernel"
import router from "@adonisjs/core/services/router"

export const UserSiteConfigRoutes = ()=>{
    router.group(()=>{
        router.post('/site/config/create', [UsersSiteConfigsController,'createUserSiteConfig']).use(middleware.auth());
        router.put('/site/config/update', [UsersSiteConfigsController, 'updateUserSiteConfig']).use(middleware.auth());
    })
}