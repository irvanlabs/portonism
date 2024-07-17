import { SkillService } from '#services/skill/skill_service';
import { createSkillValidator, updateSkillValidator } from '#validators/skill';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class SkillsController {
    constructor(
        private skillsService: SkillService
    ){}

    async getMySkill({request}: HttpContext){
        let user_id = request.user.id
        return await this.skillsService.getMySkill(user_id)
    }

    async createSkill({request}: HttpContext){
        let data = await request.validateUsing(createSkillValidator)
        let user_id = request.user.id
        return await this.skillsService.createSkill(user_id, data)
    }

    async updateSkill({request}: HttpContext){
        let data = await request.validateUsing(updateSkillValidator)
        let user_id = request.user.id
        let skill_id = request.param('id')
        return await this.skillsService.updateSkill(user_id, skill_id, data)
    }

    async deleteSkill({request}:HttpContext){
        let skill_id = request.param('id')
        let user_id = request.user.id
        return await this.skillsService.deleteSkill(user_id, skill_id)
    }
}