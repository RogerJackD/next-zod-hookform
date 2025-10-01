"use client";

import { z } from "zod";

import { useCreateUser } from "../users/hooks/useCreateUser";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/validations/form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = z.infer<typeof formSchema>;

export default function RegisterPage() {
 
  const {createUser, isLoading} = useCreateUser();

  const {register, handleSubmit, formState: { errors }} = useForm<FormData>({ resolver: zodResolver(formSchema)});

  const onSubmit = async (data: FormData) => {
    createUser(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <h2 className="text-xl font-bold">Crear Usuario</h2>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nombre *
        </label>
        <input
          type="text"
          id="name"
          {...register("name",{required: "ingresa el campo obligatorio"})}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      {errors.name &&(
        <span>{errors.name.message}</span>
      )}


      <div>
        <label htmlFor="lastName" className="block text-sm font-medium">
          lastName *
        </label>
        <input
          type="text"
          id="lastName"
          {...register("lastName")}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      {errors.lastName &&(
        <span>{errors.lastName.message}</span>
      )}


      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          email *
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      {errors.email &&(
        <span>{errors.email.message}</span>
      )}


      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          phone *
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone")}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      {errors.phone &&(
        <span>{errors.phone.message}</span>
      )}


      <div>
        <label htmlFor="address" className="block text-sm font-medium">
          address *
        </label>
        <input
          type="text"
          id="address"
          {...register("address")}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      {errors.address &&(
        <span>{errors.address.message}</span>
      )}

      

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
      >
        {isLoading ? 'Creando...' : 'Crear Usuario'}
      </button>
    </form>
    </div>
  );
}
