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
      dateOfBirth: new Date(),
      gender: "Male",
      adresseLine1: "",
      adresseLine2: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      phoneNumber1: 677777777,
      phoneNumber2: 677777777,
      email: "",
      userName:"",
      password:"",
      confirmPassword:"",
    }
  })

  const { toast } = useToast()

  function onSubmit (data: Input) {

    if (data?.confirmPassword !== data.password) {
      toast({
        title: "Passwords do not match",
        content: "Rest assured that both passwords are similar.",
        variant: 'destructive'
      })
      return
    }
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
          <div className="mx-auto flex w-full flex-col justify-center space-y-9 max-w-[700px]">
            <Tabs defaultValue="candidate" className="">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="candidate">Candidate</TabsTrigger>
                <TabsTrigger value="company">Company</TabsTrigger>
              </TabsList>
              <TabsContent value="candidate">
                <Card className=''>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your candidate here. Click save when you're done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 relative overflow-x-hidden">
                        <motion.div 
                          className={cn("space-y-3")}
                          // formStep == 0 -> translateX == 0
                          // formStep == 1 -> translateX == '-100%'
                          animate={{
                            translateX: `${formStep * 100}%`,
                          }}
                          transition={{
                            easeIn: 'easeInOut'
                          }}
                        >
                          {/* firstName */}
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your first name..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* lastName */}
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your last name..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* placeOfBirth */}
                          <FormField
                            control={form.control}
                            name="placeOfBirth"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Place of birth</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter the place that you were born" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className='grid grid-cols-2'>
                            {/* dateOfBirth */}
                            <FormField
                              control={form.control}
                              name="dateOfBirth"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Date of birth</FormLabel>
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant={"outline"}
                                          className={cn(
                                            "w-[240px] pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                          )}
                                        >
                                          {field.value ? (
                                            format(field.value, "PPP")
                                          ) : (
                                            <span>Pick a date</span>
                                          )}
                                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                      <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                          date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                      />
                                    </PopoverContent>
                                  </Popover>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {/* gender */}
                            <FormField
                              control={form.control}
                              name="gender"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Gender</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select a verified email to display" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {
                                        ["Male", "Female"].map(gender => {
                                          return(
                                            <SelectItem key={gender} value={gender.toString()}>Gender {gender}</SelectItem>
                                          )
                                        })
                                      }
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                        </motion.div>
                        
                        <motion.div className={cn("space-y-3 absolute top-0 left-0 right-0", {
                            // 'hidden': formStep == 0
                          })}

                          // formStep == 0 -> translateX == 100%
                          // 
                          animate = {{
                            translateX: `${100 - formStep * 100}%`
                          }}
                          transition={{
                            ease: 'easeInOut'
                          }}
                          >
                          {/* adresseLine1 */}
                          <FormField
                            control={form.control}
                            name="adresseLine1"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Adresse line 1</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your adresse line..." {...field} />
                                </FormControl>
                                <FormDescription>
                                  This is your public display name.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* adresseLine2 */}
                          <FormField
                            control={form.control}
                            name="adresseLine2"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Adresse line 2</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your adresse line..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid grid-cols-2">
                            {/* city */}
                            <FormField
                              control={form.control}
                              name="city"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>City</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your city name..." {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {/* state */}
                            <FormField
                              control={form.control}
                              name="state"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>State</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your state name..." {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid grid-cols-2">
                            {/* country */}
                            <FormField
                              control={form.control}
                              name="country"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Country</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your city country..." {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {/* zipCode */}
                            <FormField
                              control={form.control}
                              name="zipCode"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Zip Code</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your state Zip Code..." {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid grid-cols-2">
                            {/* phoneNumber1 */}
                            <FormField
                              control={form.control}
                              name="phoneNumber1"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone number 1</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your phone number..." {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {/* phoneNumber2 */}
                            <FormField
                              control={form.control}
                              name="phoneNumber2"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone number 2</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your phone number..." {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </motion.div>
                        <div className="flex gap-2">
                          <Button 
                            className={
                              cn({
                                hidden: formStep == 0,
                            })} 
                            type="submit">
                              Submit
                          </Button>
                          <Button className={cn({
                            hidden: formStep == 1
                          })} type="button" variant={'ghost'} onClick={() => {

                            // validation
                            form.trigger(['firstName', 'placeOfBirth', 'dateOfBirth', 'gender', 'adresseLine1', 'city', 'country', 'zipCode', 'phoneNumber1'])

                            const firstNameState = form.getFieldState('firstName')
                            const placeOfBirthState = form.getFieldState('placeOfBirth')
                            const dateOfBirthState = form.getFieldState('dateOfBirth')
                            const genderState = form.getFieldState('gender')
                            const adresseLine1State = form.getFieldState('adresseLine1')
                            const cityState = form.getFieldState('city')
                            const countryState = form.getFieldState('country')
                            const zipCodeState = form.getFieldState('zipCode')
                            const phoneNumber1State = form.getFieldState('phoneNumber1')

                            if (!firstNameState.isDirty || firstNameState.invalid) return
                            if (!placeOfBirthState.isDirty || placeOfBirthState.invalid) return
                            if (!dateOfBirthState.isDirty || dateOfBirthState.invalid) return
                            if (!genderState.isDirty || genderState.invalid) return
                            if (!adresseLine1State.isDirty || adresseLine1State.invalid) return
                            if (!cityState.isDirty || cityState.invalid) return
                            if (!countryState.isDirty || countryState.invalid) return
                            if (!zipCodeState.isDirty || zipCodeState.invalid) return
                            if (!phoneNumber1State.isDirty || phoneNumber1State.invalid) return

                            setFormStep(1)
                            
                          }}>
                              Next Step
                              <ArrowRight className='h-4 w-4 ml-2' />
                          </Button>
                          <Button 
                            className={
                              cn({
                                hidden: formStep == 0,
                            })} 
                            type="button"
                            onClick={() => setFormStep(0)}
                            variant={'ghost'}
                          >
                              <ArrowLeft className='h-4 w-4 mr-2' />
                              Go Back
                          </Button>
                        </div>
                        
                        
                      </form>
                    </Form>
                  </CardContent>
                  <CardFooter>
                    <Button>Save changes</Button>
                  </CardFooter>
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
    </>
  )
}
