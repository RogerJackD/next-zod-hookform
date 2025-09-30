'use client'

import { useForm } from "react-hook-form";


type FormData = {
    email: string;
    password: string;
    userName : string
}


export default function RegisterPage() {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(`data form:`, data);
    }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Formulario Básico</h1>

      {/* 4. handleSubmit envuelve nuestra función onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <div>
            <label htmlFor="userName" className="block text-sm font-medium mb-1">
            userName
            </label>
            <input 
                type="text" 
                id="userName"
                {...register('userName', {
                    required: 'user name is required'
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.userName?.message}</p>
            )}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'El email es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Mostramos el error si existe */}
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            {...register('password', { 
              required: 'La contraseña es requerida',
              minLength: {
                value: 6,
                message: 'Mínimo 6 caracteres'
              }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
