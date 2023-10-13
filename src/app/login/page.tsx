"use client"

import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {FcGoogle} from "react-icons/fc"
import {FaLinkedinIn} from "react-icons/fa"
 
import LoginImage from '@/assets/group-youngs.jpg'
import LogoWhite from "@/assets/logo-white.png"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Button } from "@/components/ui/button"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Login({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
      event.preventDefault()
      setIsLoading(true)
  
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
  return (
    <>
     <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/sign-in"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Sign In
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <Image layout="" fill alt="login image" className="absolute  inset-0 object-cover " src={LoginImage} ></Image>
          <Link href="/">
            <div className="relative z-20 flex items-center text-lg font-medium">
              <Image className="max-w-[110px]" alt="logo white" src={LogoWhite} />
            </div>
          </Link>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                  Enter your email below to log in
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                  <Button variant="outline">
                    <FaLinkedinIn className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline">
                    <FcGoogle className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  
                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label >Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label>Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Login</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}