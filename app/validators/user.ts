import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
    vine.object({
        fullname: vine.string().trim(),
        email: vine.string().email(),
        password: vine.string(),
        password_confirmation: vine.string()
    })
);


