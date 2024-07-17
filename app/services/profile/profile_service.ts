import Profile from "#models/profile_model";
import { inject } from "@adonisjs/core";
import { UpdateProfileDTO } from "./profile_dto.js";
import User from "#models/user_model";

export default class ProfileService{
    async updateProfile(user_id: number, data: UpdateProfileDTO){
        let profile  = await Profile.findByOrFail({
            user_id: user_id
        })

        profile.merge({
            bio: data.bio,
            profilePic: data.profile_picture,
            twitterUrl: data.twitter_url,
            linkedInUrl: data.github_url
        })

        await profile.save()
        return profile
    }

    async createProfile(user_id: number){
        let profile = await Profile.create({
            userId: user_id,
        })

        return profile
    }

    async getMyProfile(user_id: number){
        let myProfile = await Profile.findByOrFail({
            user_id: user_id
        })
        return myProfile
    }

    async getUserProfile(uuid: string){
        let profile = await User.query()
        .where('uuid', uuid)
        .preload('profiles')
        .firstOrFail()
    
        return profile;
    }
}