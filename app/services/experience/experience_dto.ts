export class CreateExperienceDTO {
    company!: string;
    position!: string;
    description!: string;
    startDate!: any;
    endDate?: any;
}


export class UpdateExperienceDTO {
    company?: string;
    position?: string;
    startDate?: any;
    endDate?: any;
    description?: string;
}