export class CreatePlanDTO{
    name!: string;
    description!: string;
    price!: number;
}

export class UpdatePlanDTO{
    name?: string;
    description?: string;
    price?: number;
}