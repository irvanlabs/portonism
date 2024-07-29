import SiteTheme from '#models/site_theme_model';
import { SiteThemeService } from '#services/site/site_themes_service';
import { createSiteThemeValidator, updateSiteThemeValidator } from '#validators/site_theme';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class SiteThemesController {
    constructor(
        private readonly siteThemeService: SiteThemeService
    ){}

    async getAllThemes(): Promise<SiteTheme[]>{
        return await this.siteThemeService.getAllSiteTheme();
    }

    async createSiteTheme({request}: HttpContext): Promise<SiteTheme>{
        let user = request.user
        let data = await request.validateUsing(createSiteThemeValidator)
        return await this.siteThemeService.createSiteTheme(user, data)
    }

    async updateSiteTheme({request}: HttpContext): Promise<SiteTheme>{
        let user = request.user
        let theme_id = request.param('id')
        let data = await request.validateUsing(updateSiteThemeValidator)
        return await this.siteThemeService.updateSiteTheme(user, theme_id, data)
    }

    async deleteSiteTheme({request}: HttpContext){
        let user = request.user
        let theme_id = request.param('id')
        return await this.siteThemeService.deleteSiteTheme(user, theme_id)
    }
}