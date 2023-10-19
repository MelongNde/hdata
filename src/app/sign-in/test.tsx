"use client"

import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {easeIn, motion} from 'framer-motion'
import {ArrowRight, ArrowLeft} from 'lucide-react'

import { useState } from 'react'

import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
 
import PeopleOffice from '@/assets/people-office.jpg'
import LogoWhite from "@/assets/logo-white.png"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
  } from "@/components/ui/form"

  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  

import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Button } from "@/components/ui/button"
import { candidateSignInSchema } from '@/validators/auth'

import { useForm } from 'react-hook-form'
import { useToast } from '@/components/ui/use-toast'

type Input = z.infer<typeof candidateSignInSchema>

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SignIn({ className, ...props }: UserAuthFormProps) {

  const [formStep, setFormStep] = useState(0)

  const form = useForm<Input>({
    resolver: zodResolver(candidateSignInSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      placeOfBirth: "",
      dateOfBirth: undefined,
      gender: "Male",
      adresseLine1: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      phoneNumber1: undefined,
      phoneNumber2: undefined,
      email: "",
      userName:"",
      password:"",
      confirmPassword:"",
    }
  })

  const { toast } = useToast()

  function bnjour( ){
    console.log("bnjour")
  }

  function onSubmit (data: Input) {

    // if (data?.confirmPassword !== data.password) {
    //   toast({
    //     title: "Passwords do not match",
    //     content: "Rest assured that both passwords are similar.",
    //     variant: 'destructive'
    //   })
    //   return
    // }
    console.log(data)

  }
  
  return (
    <>
     <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <Image layout="" fill alt="login image" className="absolute  inset-0 object-cover " src={PeopleOffice} ></Image>
          <Link href="/">
            <div className="relative z-20 flex items-center text-lg font-medium">
              <Image className="max-w-[110px]" alt="logo white" src={LogoWhite} />
            </div>
          </Link>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-9 max-w-[750px]">
            <Tabs defaultValue="candidate" className="">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="candidate">Candidate</TabsTrigger>
                <TabsTrigger value="company">Company</TabsTrigger>
              </TabsList>
              <TabsContent className='' value="candidate">
                  {/* cadidate registration */}
              </TabsContent>
              <TabsContent value="company">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your company here. After saving, you'll be logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label>Current company</Label>
                      <Input id="current" type="company" />
                    </div>
                    <div className="space-y-1">
                      <Label>New company</Label>
                      <Input id="new" type="company" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save company</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
