import LinksController from "#controllers/link/links_controller";
import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router"
  
// LINK routes
export const LinkRoutes = ()=>{
    router.group(()=>{
      router.get('/', [LinksController, 'index'])
      router.post('/create', [LinksController, 'create']).use(middleware.checkAuthorization());
      router.get('/get', [LinksController, 'get'])
    }).prefix('/link')
}