import UserSiteConfig from "#models/user_site_config_model";
import { generateCname } from "../../utils/generate_cname.js";
import { createUserSiteConfigDTO, updateUserSiteConfigDTO } from "./site.dto.js";

export default class UserSiteConfigService{
    async createUserSite(user_id: number, data:createUserSiteConfigDTO): Promise<UserSiteConfig>{
        let cname = generateCname()
        let config = await UserSiteConfig.create({
            userId: user_id,
            siteUrl: data.site_url,
            canonicalName: cname,
            themeId: data.theme_id ? data.theme_id : 1
        })
        return config;
    }

    async updateUserSite(user_id: number, data:updateUserSiteConfigDTO): Promise<UserSiteConfig>{
        let updateConfig = await UserSiteConfig.findByOrFail({
            userId: user_id,
        })

        updateConfig.merge({
            siteUrl: data.site_url,
            themeId: data.theme_id,
        })

        await updateConfig.save()
        return updateConfig
    }


    async getSiteConfigByUserId(user_id: number): Promise<UserSiteConfig>{
        return await UserSiteConfig.findByOrFail({
            userId: user_id
        })
    }
}