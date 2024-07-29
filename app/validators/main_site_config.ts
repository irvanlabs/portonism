import vine from '@vinejs/vine'

export const createMainSiteConfigValidator= vine.compile(vine.object({
    key: vine.string().trim(),
    value: vine.string(),
    description: vine.string()
}))

export const updateMainSiteConfigValidator= vine.compile(vine.object({
    key: vine.string().trim().optional(),
    value: vine.string().optional(),
    description: vine.string().optional()
}))