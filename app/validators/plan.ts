import vine from '@vinejs/vine'

export const CreatePlanValdator = vine.compile(
    vine.object({
        name: vine.string().trim(),
        description: vine.string().trim(),
        price: vine.number()
    })
)


export const UpdatePlanValdator = vine.compile(
    vine.object({
        name: vine.string().trim().optional(),
        description: vine.string().trim().optional(),
        price: vine.number().optional(),
    })
)