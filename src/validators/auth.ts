import {z} from 'zod'

export const candidateSignInSchema = z.object({
    firstName: z
        .string()
        .min(3, { message: "Your name should not be that short" })
        .max(255),
    lastName: z
        .string()
        .max(255),
    placeOfBirth: z
        .string()
        .max(255),
    dateOfBirth: z
        .date({
            required_error: "Please select a date and time",
            invalid_type_error: "That's not a date!",
          }),
    gender: z
        .enum(['Female', 'Male']),
    adresseLine1: z
        .string()
        .min(2),
    adresseLine2: z
        .string()
        .min(2),
    city: z
        .string()
        .min(2),
    state: z
        .string()
        .min(2),
    country: z
        .string()
        .min(2),
    zipCode: z
        .string(),
    phoneNumber1: z
    .number(),
    phoneNumber2: z
    .number(),
    email: z
        .string(),
    userName: z
        .string()
        .min(3, { message: "Your name should not be that short" })
        .max(255),
    password: z
        .string()
        .min(6)
        .max(100),
    confirmPassword: z
        .string()
        .min(6)
        .max(100)
})