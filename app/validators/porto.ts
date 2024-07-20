import vine from '@vinejs/vine'

export const getUserPortos= vine.compile(vine.object({
    uuid: vine.string().trim()
}));