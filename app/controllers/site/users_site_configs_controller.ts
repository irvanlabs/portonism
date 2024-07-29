import UserSiteConfigService from '#services/site/user_site_config_service';
import { createUserSiteConfigValidator, updateUserSiteConfigValidator } from '#validators/user_site_config';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'


@inject()
export default class UsersSiteConfigsController {
    constructor(
        private userSiteConfigService: UserSiteConfigService
    ){}
    async getUserSiteConfig({request}:HttpContext){
        let user_id = request.user.id;
        return await this.userSiteConfigService.getSiteConfigByUserId(user_id);
    }

    async createUserSiteConfig({request}:HttpContext){
        let user_id: number = request.user.id
        let data = await request.validateUsing(createUserSiteConfigValidator)
        return await this.userSiteConfigService.createUserSite(user_id, data)
    }

    async updateUserSiteConfig({request}:HttpContext){
        let user_id = request.user.id;
        let data = await request.validateUsing(updateUserSiteConfigValidator)
        return await this.userSiteConfigService.updateUserSite(user_id, data)
    }


}