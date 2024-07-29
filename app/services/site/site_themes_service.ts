import SiteTheme from "#models/site_theme_model";
import { userDTO } from "#services/user/user_dto";
import { inject } from "@adonisjs/core";
import { createSiteThemeDTO, updateSiteThemeDTO } from "./site.dto.js";
import { UtilsService } from "../../utils/role_verification.js";
import Plan from "#models/plan_model";

@inject()
export class SiteThemeService{
    constructor(
        private readonly utilService: UtilsService
    ){}

    async getAllSiteTheme(): Promise<SiteTheme[]>{
        return await SiteTheme.all()
    }

    async createSiteTheme(user: userDTO, data: createSiteThemeDTO): Promise<SiteTheme>{
        await this.utilService.isAdmin(user)

        let theme = await SiteTheme.create({
            name: data.name,
            imageUrl: data.image_url,
            isActive: data.is_active,
            directoryName: data.directory_name,
        })

        const plan = await Plan.findByOrFail({id: data.plan})
        if(plan) await theme.related('plans').attach([plan.id])

        return theme
    }

    async updateSiteTheme(user: userDTO, theme_id: number,data: updateSiteThemeDTO): Promise<SiteTheme>{
        await this.utilService.isAdmin(user)

        let site_theme = await SiteTheme.findByOrFail({
            id: theme_id
        })

        site_theme.merge({
            name: data.name,
            imageUrl: data.image_url,
            isActive: data.is_active,
            directoryName: data.directory_name
        })

        await site_theme.save()

        const plan = await Plan.findByOrFail({id: data.plan})
        await site_theme.related('plans').sync([plan.id])

        return site_theme
    }


    async deleteSiteTheme(user: userDTO, theme_id: number): Promise<SiteTheme>{
        await this.utilService.isAdmin(user)
        let theme = await SiteTheme.findByOrFail({id: theme_id})

        await theme.delete()

        return theme
    }
}