import { MultipartFile } from "@adonisjs/core/bodyparser";

export class CreateUserDTO {
    fullname!: string;
    email!: string;
    password!: string;
    password_confirmation!: string;
}


export class updateUserDTO {
    username?: string;
    fullname?: string;
    email?: string;
    avatar?: MultipartFile;
    phone_number?: string;
    password?: string;
    password_confirmation?: string;
}


export class resetPasswordDTO{
    password?: string;
    password_confirmation?: string;
}
export interface LoginUserDTO {
    email: string;
    password: string;
}

export class userDTO {
    id!: number
    email!: string
    roleId!: number
    roles!: string[]
    email_verified!: boolean
    phone_verified!: boolean
    iat!: number
    exp!: number
}