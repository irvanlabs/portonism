import { MainSiteConfigService } from '#services/site/main_site_config_service';
import { createMainSiteConfigValidator, updateMainSiteConfigValidator } from '#validators/main_site_config';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'


@inject()
export default class MainSitesController {
    constructor(
        private readonly mainSiteService: MainSiteConfigService
    ){}

    async getAllConfigs({request}: HttpContext): Promise<any>{
        let user = request.user
        return await this.mainSiteService.getAll(user)
    }

    async createMainSiteConfig({request}:HttpContext): Promise<any> {
        let user = request.user
        let data = await request.validateUsing(createMainSiteConfigValidator)
        return await this.mainSiteService.createConfig(user, data)
    }

    async updateMainSiteConfig({request}:HttpContext): Promise<any> {
        let user = request.user
        let id = request.param('id')
        let data = await request.validateUsing(updateMainSiteConfigValidator)
        return await this.mainSiteService.updateMainSiteContig(user, id, data)
    }
}