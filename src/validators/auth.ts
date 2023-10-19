import {z} from 'zod'

export const candidateSignInSchema = z.object({
    firstName: z
        .string()
        .min(3, { message: "Your name should not be that short" })
        .max(255),
    lastName: z
        .string()
        .min(3, { message: "Your name should not be that short" })
        .max(255),
    placeOfBirth: z
        .string()
        .min(3, { message: "Your name should not be that short" })
        .max(255),
    dateOfBirth: z
    .preprocess((arg) => {
        if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
        }, z.date()),
    gender: z
        .string(),
    adresseLine: z
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
    phoneNumberOne: z
    .string()
    .refine((val) => !isNaN(val as unknown as number), {
        message: "Pnone number should be a number",
    }),
    phoneNumberTwo: z
    .string()
    .refine((val) => !isNaN(val as unknown as number), {
        message: "Phone number should be a number",
    }),
    emailAddress: z
        .string()
        .email(),
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