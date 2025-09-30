import { useState } from "react";
import { CreateUserDto, User } from "../types/user";
import { userService } from "../service/userService";


export const useCreateUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createUser = async ( userData : CreateUserDto): Promise<User | null> => {
        setIsLoading(true);
        setError(null);

        try {
            const newUser = await userService.createUser(userData);
            return newUser;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Error desconocido"
            setError(errorMessage);
            return null
        } finally {
            setIsLoading(false);
        }
    };

    const resetError = () => setError(null);

    return {
        createUser,
        isLoading,
        error,
        resetError,
    }
}