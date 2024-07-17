import PlansController from "#controllers/plan/plans_controller"
import { middleware } from "#start/kernel"
import router from "@adonisjs/core/services/router"

export const PlanRoutes = ()=>{
    router.get('/plans',[PlansController,'getAllPlans'])
    router.group(()=>{
        router.get('/detail/:id', [PlansController, 'getPlanById'])
        router.post('/create', [PlansController, 'createPlan']).use(middleware.auth())
        router.put('/update/:id', [PlansController, 'updatePlan']).use(middleware.auth())
    }).prefix('/plan')
}