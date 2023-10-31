import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from "./db"
import { compare } from "bcrypt"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages:{
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "me@example.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {

            // console.log("Ini")
            
            if (!credentials?.email || !credentials?.password) {
                console.log('Pas de reception de données')
                return null
            }

            // console.log("Ini 2")
            
            const existingUser = await db.user.findUnique({
                where: { email: credentials?.email }    
            })

            if(!existingUser) {
              console.log('didnt\' found')
              return null
            }

            const passwordMatch = await compare(credentials.password, existingUser.password)

            if (!passwordMatch) {
              return null
            }
            return {
                id: `${existingUser.id}`,
                firstName: existingUser.firstName,
                lastName: existingUser.lastName,
                email: existingUser.email
            }
          }
        })
      ],
      callbacks: {
        async jwt ({
          token, user
        }) {
          console.log(token, user)
          if (user) {
            return {
              ...token, 
              firstName: user.firstName
          }}
          return token
        },
        async session({ session, user, token }){
          return {
            ...session,
            user: {
              ...session.user,
              firstName: token.firstName
            }
          }
        }
      }
      // callbacks: {
      //   async jwt({ token, user }) {
      //     console.log(token, user)
      //     if(user) {
      //       return {
      //         ...token,
      //         username: user.username
      //       }
      //     }
      //     return token
      //   },
      //   async session({ session, token }) {
      //     return {
      //       ...session,
      //       user: {
      //         ...session.user,
      //         username: token.firstName
      //       }
      //     }
      //   }
      // }
}