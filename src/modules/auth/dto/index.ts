export interface AuthRegisterDto {
    username: string;
    email: string;
    password: string;
}

export interface AuthLoginDto {
    email: string;
    password: string;
}
