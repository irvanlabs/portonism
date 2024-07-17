import type { HttpContext } from '@adonisjs/core/http'

import { inject } from "@adonisjs/core";
import { EducationService } from '#services/education/education_service';
import { CreateEducationValidator, UpdateEducationValidator } from '#validators/education';

@inject()
export default class EducationsController {
    constructor(
        private educationService: EducationService
    ){}


    async create({request}: HttpContext){
        let data = await request.validateUsing(CreateEducationValidator)
        let user_id = request.user.id 
        return await this.educationService.createEducation(user_id,data)
    }

    async getMyEducation({request}: HttpContext){
        let user_id = request.user.id
        return await this.educationService.getMyEducation(user_id)
    }

    async getUserEducation({request}: HttpContext){
        let userUUID = request.param('uuid')
        return await this.educationService.getUserEducation(userUUID)
    }

    async update({request}: HttpContext){
        let data = await request.validateUsing(UpdateEducationValidator)
        let user_id = request.user.id
        let id =  request.param('id')
        return await this.educationService.updateEducation(user_id, id, data)
    }

    async delete({request}: HttpContext){
        let user_id = request.user.id
        let id = request.param('id')
        return await this.educationService.deleteEducation(user_id, id)
    }
    
}