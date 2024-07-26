import UserSiteConfigService from '#services/site/user_site_config_service';
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
}