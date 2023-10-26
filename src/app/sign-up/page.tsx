"use client"

import React from 'react'
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { Input } from '@/components/ui/input'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import PeopleOffice from '@/assets/people-office.jpg'
import LogoWhite from "@/assets/logo-white.png"
import Image from 'next/image'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const FormSchema = z
  .object({
    firstName: z.string().min(1, 'Username is required').max(100),
    lastName: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

export default function SignUp ()  {

  const router = useRouter()

  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });


  const onSubmit = async (datas: z.infer<typeof FormSchema>) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: datas.firstName,
        lastName: datas.lastName,
        email: datas.email,
        password: datas.password
      })
    })

    if(response.ok) {
      router.push('/login')
    } else {
      console.error('Registration failed')
    }
  }

  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
                <Card className='w-[750px]'>
                  <CardHeader>
                    <CardTitle>Candidate Registration</CardTitle>
                    <CardDescription>
                      Start the journey wuth us today.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
                        <div className='space-y-2'>
                          <FormField
                            control={form.control}
                            name='firstName'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First name</FormLabel>
                                <FormControl>
                                  <Input placeholder='Enter your first name' {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name='lastName'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last name</FormLabel>
                                <FormControl>
                                  <Input placeholder='Enter your last name' {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder='mail@example.com' {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                  <Input
                                    type='password'
                                    placeholder='Enter your password'
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name='confirmPassword'
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Confirm password</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder='Re-Enter your password'
                                    type='password'
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <Button className='w-full mt-6' type='submit'>
                          Sign up
                        </Button>
                      </form>
                      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
                        or
                      </div>
                      {/* <GoogleSignInButton>Sign up with Google</GoogleSignInButton> */}
                      <p className='text-center text-sm text-gray-600 mt-2'>
                        If you already have an account, please&nbsp;
                        <Link className='text-blue-500 hover:underline' href='/sign-in'>
                          Sign in
                        </Link>
                      </p>
                    </Form>
                  </CardContent>
                </Card>
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
    
  )
}