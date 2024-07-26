import Config from "#models/config_model";

export class MainSiteConfigService{

    async getAll(): Promise<Config[]>{
        return await Config.all();
    }
}