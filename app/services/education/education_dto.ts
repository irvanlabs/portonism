export class CreateEducationDTO {
    institution!: string;
    degree!: string;
    field!: string;
    startDate!:any; // ISO string format for DateTime
    endDate?: any;  // Optional and in ISO string format for DateTime
  }
  
  export class UpdateEducationDTO {
    institution?: string;
    degree?: string;
    field?: string;
    startDate?: any; // ISO string format for DateTime
    endDate?: any;  // Optional and in ISO string format for DateTime
  }
  