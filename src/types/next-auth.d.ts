import NextAuth from 'next-auth'

declare module 'next-auth' {
    interface User {
        firstName: string
    }
    interface Session {
        //The user's portal address.
        user: User & {
            firstName: string
        }
        token: {
            firstName: string
        }
    }
}