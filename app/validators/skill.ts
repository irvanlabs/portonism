import { SkillLevel } from '#models/skill_model';
import vine from '@vinejs/vine'


export const createSkillValidator = vine.compile(vine.object({
    name: vine.string().trim(),
    level: vine.enum(SkillLevel)
}));


export const updateSkillValidator = vine.compile(vine.object({
    name: vine.string().trim().optional(),
    level: vine.enum(SkillLevel).optional()
}));