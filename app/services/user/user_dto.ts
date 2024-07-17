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
    iat!: number
    exp!: number
}