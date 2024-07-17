import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
    vine.object({
        fullname: vine.string().trim(),
        email: vine.string().email(),
        password: vine.string(),
        password_confirmation: vine.string()
    })
);


export const updateUserValidator = vine.compile(
    vine.object({
        username: vine.string().trim().optional(),
        fullname: vine.string().trim().optional(),
        email: vine.string().email().optional(),
        phone_number: vine.string().trim().optional(),
        password: vine.string().optional(),
        password_confirmation: vine.string().optional(),
    })
);


export const resetPasswordValidator = vine.compile(
    vine.object({
        password: vine.string().optional(),
        password_confirmation: vine.string().optional(),
    })
);



