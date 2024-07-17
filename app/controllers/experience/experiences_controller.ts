import { ExperienceService } from '#services/experience/experience_service';
import { CreateExperienceValidator, UpdateExperienceValidator } from '#validators/experience';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ExperiencesController {

    constructor(
        private experienceService: ExperienceService
    ){}

    async getUserExperience({request}: HttpContext){
        let uuid = request.param('uuid')
        if (uuid){
            return await this.experienceService.getUserExperience(uuid)
        }
        return []
    }


    async getMyExperience({request}: HttpContext){
        let user_id = request.user.id;
        return await this.experienceService.getMyExperience(user_id)
    }

    async createExperience({request}: HttpContext){
        let data = await request.validateUsing(CreateExperienceValidator)
        let user_id = request.user.id

        return await this.experienceService.createExperience(user_id, data)
    }

    async updateExperience({request}: HttpContext){
        let data = await request.validateUsing(UpdateExperienceValidator)
        let user_id = request.user.id
        let experience_id = request.param('id')
        return await this.experienceService.updateExperience(user_id, experience_id, data)
    }

    async deleteExperience({request}: HttpContext){
        let user_id = request.user.id
        let experience_id = request.param('uuid')

        return await this.experienceService.deleteExperience(user_id, experience_id)
    }
}