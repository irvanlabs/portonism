import MainSitesController from "#controllers/site/main_site_config_controller"
import { middleware } from "#start/kernel"
import router from "@adonisjs/core/services/router"

export const MainSiteConfigRoutes = () =>{
    router.group(()=>{
        router.get('/all', [MainSitesController, 'getAllConfigs']).use(middleware.auth());
        router.post('/create', [MainSitesController, 'createMainSiteConfig']).use(middleware.auth());
        router.put('/update/:id', [MainSitesController, 'updateMainSiteConfig']).use(middleware.auth());
    }).prefix('/main')
}