import Education from "#models/education_model";
import { DateTime } from "luxon";
import { CreateEducationDTO, UpdateEducationDTO } from "./education_dto.js";
import { inject } from "@adonisjs/core";
import UserService from "#services/user/user_service";

@inject()
export class EducationService{
    constructor(
        private userService: UserService
    ){}
    async createEducation(user_id: number,data: CreateEducationDTO){

        let startDateFormat = DateTime.fromISO(data.startDate);
        let endDateFormat = DateTime.fromISO(data.endDate);
        let education  = await Education.create({
            institution: data.institution,
            degree: data.degree,
            field: data.field,
            startDate: startDateFormat,
            endDate: endDateFormat,
            userId: user_id
        });

        return education;
    }

    async getMyEducation(user_id: number){
        let education = await Education.findByOrFail({
            user_id: user_id,
        })

        return education;
    }

    async getUserEducation(uuid: string){
        return await this.userService.getUserEducation(uuid);
    }

    async updateEducation(user_id:number, education_id: number, data: UpdateEducationDTO){
        let education = await Education.findByOrFail({
            user_id: user_id,
            id: education_id,
        })

        let startDateFormat = DateTime.fromISO(data.startDate);
        let endDateFormat = DateTime.fromISO(data.endDate);

        education.merge({
            institution: data.institution,
            degree: data.degree,
            field: data.field,
            startDate: startDateFormat,
            endDate: endDateFormat
        })

        await education.save()
        return education;
    }


    async deleteEducation(user_id:number, education_id: number){
        let education = await Education.findByOrFail({
            id: education_id,
            user_id: user_id
        })

        await education.delete()
    }
}