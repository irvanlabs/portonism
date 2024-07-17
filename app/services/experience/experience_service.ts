import { CreateExperienceDTO, UpdateExperienceDTO } from "#services/experience/experience_dto";
import Experience from "#models/experience_model";
import UserService from "#services/user/user_service";
import { inject } from "@adonisjs/core";
import { DateTime } from "luxon";

@inject()
export class ExperienceService{
    constructor(
        private userService: UserService
    ){}

    async getUserExperience(uuid: string){
        return await this.userService.getUserExperience(uuid);
    }

    async getMyExperience(user_id: number){
        let experience = await Experience.findManyBy({ user_id: user_id})
        return experience
    }

    async createExperience(user_id:number, data: CreateExperienceDTO){
        let startDateFormat = DateTime.fromISO(data.startDate);
        let endDateFormat = DateTime.fromISO(data.endDate);

        let experience = await Experience.create({
            userId: user_id,
            company: data.company,
            position: data.position,
            description: data.description,
            startDate: startDateFormat,
            endDate: endDateFormat,
        })

        return experience;
    }


    async updateExperience(user_id:number, experience_id: number, data: UpdateExperienceDTO){
        let experience = await Experience.findByOrFail({
            id: experience_id,
            user_id: user_id,
        })

        let startDateFormat = DateTime.fromISO(data.startDate);
        let endDateFormat
        if (data.endDate) endDateFormat = DateTime.fromISO(data.endDate);


        experience.merge({
            company: data.company,
            position: data.position,
            startDate: startDateFormat,
            endDate: endDateFormat || null,
            description: data.description,
        })

        experience.save()
        return experience;
    }

    async deleteExperience(user_id:number, experience_id: number){
        let experience = await Experience.findByOrFail({
            id: experience_id,
            user_id: user_id
        })

        await experience.delete()
        return experience;
    }
}