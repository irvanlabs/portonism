import PortosController from "#controllers/portofolio/portos_controller"
import router from "@adonisjs/core/services/router"

export const PortofolioRoutes = ()=>{
  router.group(()=>{
    router.get('spa/:uuid', [PortosController, 'getPortosSPA'])
  }).prefix('/portofolio')
}