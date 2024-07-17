import vine from '@vinejs/vine'

export const UpdateProfileValidator = vine.compile(
    vine.object({
        bio: vine.string().optional(),
        profile_picture: vine.string().optional(),
        twitter_url: vine.string().optional(),
        linkedin_url: vine.string().optional(),
        github_url: vine.string().optional(),
    })
)