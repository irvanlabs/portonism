export interface CreateUserDTO {
    fullname: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface LoginUserDTO {
    username: string;
    email: string;
    password: string;
}