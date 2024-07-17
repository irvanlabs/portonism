import vine from '@vinejs/vine'


export const UpdateRoleValidator = vine.compile(
    vine.object({
        user_id: vine.number(),
        role_id: vine.number(),
    })
)