import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import {hash} from 'bcrypt'
import * as z from 'zod' 

const userSchema = z.object({
    firstName: z
        .string()
        .min(2, { message: "This name should not be that short" })
        .max(255),
    lastName: z
        .string()
        .max(255),
    
    email: z
        .string()
        .min(1, "Email is required")
        .email(),
    password: z
        .string()
        .min(1, "Password required")
        .min(8, "Password must have more than 8 characters")
})

export async function POST(req: Request) {
    try {
        const body = await req.json()

        // return NextResponse.json(body)

        const {firstName, lastName, email, password} = userSchema.parse(body)

        // check if the imail already exists
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        })
        if (existingUserByEmail){
            return NextResponse.json({ 
                user: null, 
                message: "User with this email already exists",
            },{
                status: 409
            })
        }

        const hashPassword = await hash(password, 10)

        const newUser = await db.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashPassword
            }
        })

        const { password: newUserPassword, ...rest } = newUser

        return NextResponse.json({ 
            user: rest, 
            message: "User created successfully"
        }, {
            status: 201
        })

    } catch (error) {
        return NextResponse.json({ 
            message: "Something went wrong !"
        }, {
            status: 500
        })
    }
}