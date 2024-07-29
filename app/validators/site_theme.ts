import vine from '@vinejs/vine'


export const createSiteThemeValidator = vine.compile(vine.object({
    name: vine.string().trim(),
    image_url: vine.string().trim(),
    is_active: vine.boolean(),
    directory_name: vine.string().trim()
}))


export const updateSiteThemeValidator = vine.compile(vine.object({
    name: vine.string().trim().optional(),
    image_url: vine.string().trim().optional(),
    is_active: vine.boolean().optional(),
    directory_name: vine.string().trim().optional(),
}))