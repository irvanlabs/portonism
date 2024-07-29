export class createUserSiteConfigDTO{
    site_url!:string;
    theme_id?:number;
}

export class updateUserSiteConfigDTO{
    site_url?:string;
    theme_id?:number;
}

export class createMainSiteConfigDTO{
    key!: string;
    value!: string;
    description!: string;
}

export class updateMainSiteConfigDTO{
    key?: string;
    value?: string;
    description?: string;
}

export class createSiteThemeDTO{
    name!: string;
    image_url?:string;
    is_active?: boolean = true;
    directory_name!: string;
    plan?: number = 1; // default plan 1 (free plan)
}

export class updateSiteThemeDTO{
    name?: string;
    image_url?:string;
    is_active?: boolean = true;
    directory_name?: string;
    plan?: number = 1; // default plan 1 (free plan)
}