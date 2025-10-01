import { useState } from "react";
import { CreateUserDto, User } from "../types/user";
import { userService } from "../service/userService";
import { useToast } from "./useToast";


export const useCreateUser = () => {
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    const createUser = async ( userData : CreateUserDto): Promise<User | null> => {
        setIsLoading(true);

        try {
            const newUser = await userService.createUser(userData);
            
            toast.success('usuario creado correctamente')

            return newUser;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Error desconocido"
            toast.error(errorMessage);
            return null
        } finally {
            setIsLoading(false);
        }
    };

    return {
        createUser,
        isLoading,
    }
}