import { SkillLevel } from "#models/skill_model";

export class createSkillDTO{
    name!:string;
    level!:SkillLevel;
}


export class updateSkillDTO{
    name?:string;
    level?:SkillLevel;
}