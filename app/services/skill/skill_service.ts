import Skill from "#models/skill_model";
import { createSkillDTO, updateSkillDTO } from "./skill_dto.js";

export class SkillService{
    async getMySkill(user_id: number){
        let userSkill =  await Skill.findManyBy({user_id: user_id})
        return userSkill
    }

    async createSkill(user_id: number, data: createSkillDTO){
        let skill = await Skill.create({
            name: data.name,
            level: data.level,
            userId: user_id
        })

        return skill;
    }

    async updateSkill(user_id: number, skill_id: number,data: updateSkillDTO){
        let skill = await Skill.findByOrFail({
            id: skill_id,
            user_id: user_id
        })

        skill.merge({
            name: data.name,
            level:data.level
        })

        await skill.save()
        return skill;
    }

    async deleteSkill(user_id: number, skill_id: number){
        let skill  = await Skill.findByOrFail({
            id: skill_id,
            user_id: user_id
        })

        await skill.delete()
        return skill;
    }
}