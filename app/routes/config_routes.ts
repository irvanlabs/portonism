import router from "@adonisjs/core/services/router"
import { MainSiteConfigRoutes } from "./main_site_config.js"

export const ConfigRoutes = () =>{
  router.group(()=>{

    // Main Site Configuration
    MainSiteConfigRoutes();
    }).prefix('/config') 
}