import vine from '@vinejs/vine'


export const loginValidator = vine.compile(
    vine.object({
        username: vine.string().trim(),
        email: vine.string().email(),
        password: vine.string(),
    })
);