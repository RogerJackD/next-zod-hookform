import { z } from "zod";


export const formSchema = z.object({
  userName: z.string().min(2, { message: "min 2 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "email invalido" }),
  password: z
    .string()
    .min(6, { message: "the password must have min 6 characters" }),
});