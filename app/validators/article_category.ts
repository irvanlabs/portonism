import vine from '@vinejs/vine'

export const createArticleCategoryValidator = vine.compile(
    vine.object({
        name: vine.string().trim()
    })
);