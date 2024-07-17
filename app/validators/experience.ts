import vine from '@vinejs/vine'

export const CreateExperienceValidator = vine.compile(vine.object({
    company: vine.string().trim(),
    position: vine.string().trim(),
    description: vine.string().trim(),
    startDate: vine.string(),
    endDate: vine.string().optional()
    })
);


export const UpdateExperienceValidator = vine.compile(vine.object({
    company: vine.string().trim().optional(),
    position: vine.string().trim().optional(),
    description: vine.string().trim().optional(),
    startDate: vine.string().optional(),
    endDate: vine.string().optional()
    })
);