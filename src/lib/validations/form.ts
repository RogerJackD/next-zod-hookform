import { z } from "zod";


export const formSchema = z.object({
  name: z.
    string()
    .min(2, { message: "Minimo dos caracteres" }),
  lastName: z.
    string().
    optional(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email invalido" }),
  phone: z
    .string()
    .regex(/^9\d{8}$/, {
      message: "El número debe tener 9 dígitos y comenzar con 9 (ej: 912345678).",
    }),
  address: z
    .string()
    .optional()
});