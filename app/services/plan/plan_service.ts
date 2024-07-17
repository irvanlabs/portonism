import { inject } from "@adonisjs/core";
import { CreatePlanDTO, UpdatePlanDTO } from "./plan_dto.js";
import { userDTO } from "#services/user/user_dto";
import Plan from "#models/plan_model";
import { UtilsService } from "../../utils/role_verification.js";

@inject()
export default class PlanService{
    constructor(
        private utils: UtilsService
    ){}
    async createPlan(user: userDTO,data: CreatePlanDTO){
        // if(user.roles !== 'admin') throw new ForbiddenException("Restricted resources")
        let admin = await this.utils.isAdmin(user); 
        if(admin){
            let plan = await Plan.create({
                name: data.name,
                price: data.price,
                description: data.description
            })
            return plan;
        }
    }

    async updatePlan(user: userDTO, plan_id: number, data: UpdatePlanDTO){
        let admin = await this.utils.isAdmin(user); 
        if(admin){
            let plan = await Plan.findByOrFail({
                id: plan_id,
            })
    
            plan.merge({
                name: data.name,
                price: data.price,
            })
    
            await plan.save()
            return plan
        }
    }

    async getPlanById(plan_id: number){
        let plan = await Plan.findByOrFail({
            id: plan_id
        })
        return plan
    }

    async getAllPlans(){
        let plans = await Plan.all()
        return plans;
    }
}