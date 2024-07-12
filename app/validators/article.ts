import vine from '@vinejs/vine'

// Validasi untuk CreateArticleDto
export const createArticleValidator = vine.compile(
    vine.object({
        title: vine.string().trim(),
        content: vine.string(),
        slug: vine.string().nullable(),
        published: vine.boolean().nullable(),
        categories: vine.array(vine.number()).notEmpty(),
    })
);


export const updateArticleValidator = vine.compile(
    vine.object({
        title: vine.string().trim().nullable(),
        content: vine.string().nullable(),
        published: vine.boolean().nullable(),
        categories: vine.array(vine.number()).nullable(),
    })
);