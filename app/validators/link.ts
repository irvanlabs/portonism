import vine from '@vinejs/vine'

export const createLinkValidator = vine.compile(
    vine.object({
        slug: vine.string().trim().nullable(),
        url: vine.string().url(),
    })
);

export const getLinkValidator = vine.compile(
    vine.object({
        slug: vine.string().trim(),
    })
);