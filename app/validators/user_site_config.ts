import vine from '@vinejs/vine'

export const createUserSiteConfigValidator = vine.compile(vine.object({
    site_url: vine.string().trim(),
    theme_id: vine.number().optional(),
}))


export const updateUserSiteConfigValidator = vine.compile(vine.object({
    site_url: vine.string().trim().optional(),
    theme_id: vine.number().optional(),
}))