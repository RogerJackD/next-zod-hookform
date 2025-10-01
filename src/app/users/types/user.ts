export interface CreateUserDto {
    name: string;
    lastName?: string;
    email: string;
    phone: string;
    address?: string;
}

export interface User {
    id: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    status: string;
    createdAt: string;
}

export interface ValidationErrors {
    message: string;
    error: string;
    statusCode: number;
}