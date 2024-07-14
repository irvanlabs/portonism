import vine from '@vinejs/vine'

export const CreateEducationValidator = vine.compile(
    vine.object({
        institution: vine.string().trim(),
        degree: vine.string().trim(),
        field: vine.string().trim(),
        startDate: vine.string().trim(),
        endDate: vine.string().trim(),
    })
);


export const UpdateEducationValidator = vine.compile(
    vine.object({
        institution: vine.string().optional(),
        degree: vine.string().trim().optional(),
        field: vine.string().trim().optional(),
        startDate: vine.date().optional(),
        endDate: vine.date().optional(),
    })
)