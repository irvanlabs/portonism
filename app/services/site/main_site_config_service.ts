import Config from "#models/main_site_config_model";
import { userDTO } from "#services/user/user_dto";
import { inject } from "@adonisjs/core";
import { createMainSiteConfigDTO, updateMainSiteConfigDTO } from "./site.dto.js";
import { UtilsService } from "../../utils/role_verification.js";

inject()
export class MainSiteConfigService{
    constructor(
        private readonly utilService: UtilsService
    ){}

    async getAll(user:userDTO): Promise<Config[]>{
        await this.utilService.isAdmin(user)
        return await Config.all();
    }

    async createConfig(user: userDTO, data:createMainSiteConfigDTO ): Promise<Config>{
        await this.utilService.isAdmin(user)
        let config = await Config.create({
            key: data.key,
            value: data.value,
            description: data.description
        })

        return config
    }

    async updateMainSiteContig(user: userDTO, config_id: number, data: updateMainSiteConfigDTO): Promise<Config>{
        await this.utilService.isAdmin(user)
        let config = await Config.findByOrFail({
            id: config_id
        })

        config.merge({
            key: data.key,
            value: data.value,
            description: data.description
        })

        await config.save()
        return config
    }
}