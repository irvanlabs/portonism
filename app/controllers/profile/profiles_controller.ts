import ProfileService from '#services/profile/profile_service';
import { UpdateProfileValidator } from '#validators/profile';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ProfilesController {

    constructor(
        private profileService: ProfileService
    ){}

    async getUserProfile({request}: HttpContext){
        let uuid = request.param('uuid')
        return await this.profileService.getUserProfile(uuid);
    }

    async getMyprofile({request}: HttpContext){
        let user_id = request.user.id
        console.log(request.user)
        return await this.profileService.getMyProfile(user_id);
    }

    async updateProfile({request}: HttpContext){
        let data = await request.validateUsing(UpdateProfileValidator)
        let user_id = request.user.id
        return await this.profileService.updateProfile(user_id, data);
    }
}