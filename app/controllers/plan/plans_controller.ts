import PlanService from '#services/plan/plan_service';
import { CreatePlanValdator, UpdatePlanValdator } from '#validators/plan';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class PlansController {
    constructor(
        private plansService: PlanService
    ){}

    async createPlan({request}:HttpContext){
        let data = await request.validateUsing(CreatePlanValdator)
        let user = request.user
        return await this.plansService.createPlan(user, data)
    }

    async getAllPlans(){
        return await this.plansService.getAllPlans()
    }

    async getPlanById({request}:HttpContext){
        let plan_id = request.param('id')
        return await this.plansService.getPlanById(plan_id)
    }
    
    async updatePlan({request}:HttpContext){
        let plan_id = request.param('id')
        let user = request.user
        let data = await request.validateUsing(UpdatePlanValdator)
        return await this.plansService.updatePlan(user, plan_id, data)
    }
}