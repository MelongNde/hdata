"use client"

import React from 'react'
import { Separator } from "@/components/ui/separator"
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
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { format } from "date-fns"
import { ArrowLeft, CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useForm } from "react-hook-form"
import { candidateSignInSchema } from "@/validators/auth"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
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

type Input = z.infer<typeof candidateSignInSchema>

export default function SignIn ()  {

  const { toast } = useToast()
  const [formStep, setFormStep] = React.useState(0)

  const form = useForm<Input>({
    // resolver: zodResolver(candidateSignInSchema),
    defaultValues: {
      firstName:"",
      lastName:"",
      placeOfBirth:"",
      dateOfBirth:undefined,
      gender:"",
      adresseLine:"",
      city:"",
      state:"",
      country:"",
      zipCode:"",
      phoneNumberOne:"",
      phoneNumberTwo:"",
      emailAddress:"",
      userName:"",
      password:"",
      confirmPassword:""
    }
  })

  function onSubmit(data: Input) {
    if (data.password !== data.confirmPassword) {
      toast({
        title: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    alert(JSON.stringify(data, null, 4));
    console.log(data);
  }

  return (
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
                <Card className='w-[750px]'>
        <CardHeader>
          <CardTitle>Candidate Registration</CardTitle>
          <CardDescription>
            Start the journey wuth us today.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form 
              action=""
              onSubmit={form.handleSubmit(onSubmit)}
              className='relative space-y-3 overflow-x-hidden'
            >
              <motion.div 
                className={cn("space-y-3", {
                  // hidden: formStep == 1,
                })}
                // formStep == 0 -> translateX == 0
                // formStep == 1 -> translateX == '-100%'
                animate={{
                  translateX: `-${formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
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
                        <Input className='w-full' placeholder="Enter your first name..." {...field} />
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
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Enter your last name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> 
                <div className="grid grid-cols-2 gap-4">
                                   
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
                                  "w-full pl-3 text-left font-normal",
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
                              // disableNavigation 
                              captionLayout="dropdown-buttons"  
                              fromYear={1960} 
                              toYear={new Date().getFullYear()} 
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
                  {/* placeOfBirth */}
                  <FormField
                    control={form.control}
                    name="placeOfBirth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Place of birth</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Enter the place you where born..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div> 
                <div className="grid grid-cols-2 gap-4">
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
                              <SelectValue placeholder="Select your gender" />
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
                  {/* adresseLine */}
                  <FormField
                    control={form.control}
                    name="adresseLine"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Adress line</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Enter the your adress line..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* country */}
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) =>(
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Enter country..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* state */}
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) =>(
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Enter the place you where born..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                </div>   
                             
              </motion.div>
              <motion.div
                className={cn("space-y-3 absolute top-0 left-0 right-0", {
                  // hidden: formStep == 0,
                })}
                // formStep == 0 -> translateX == 100%
                // formStep == 1 -> translateX == 0
                animate={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                style={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              > 
                <div className="grid grid-cols-2 gap-2">
                  {/* city */}
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Enter the your city..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) =>(
                      <FormItem>
                        <FormLabel>Zip code</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Enter zip code..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* phoneNumber1 */}
                  <FormField
                    control={form.control}
                    name="phoneNumberOne"
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
                    name="phoneNumberTwo"
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
                <Separator className='my-4'/>
                <div className='grid grid-cols-2 gap-4'>
                  <FormField
                    control={form.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>User name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your user name ;.." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="emailAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mail adresse</FormLabel>
                        <FormControl>
                          <Input type='email' placeholder="Enter your mail adress.." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type='password' placeholder="Enter a password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm password</FormLabel>
                        <FormControl>
                          <Input type='password' placeholder="Confirm your password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>                         
              </motion.div>
              <CardFooter>
                <div className="flex gap-2 mt-4">
                  <Button
                    type="button"
                    variant={"ghost"}
                    onClick={() => {
                      setFormStep(0);
                    }}
                    className={cn({
                      hidden: formStep == 0,
                    })}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back
                  </Button>
                  <Button
                    type="submit"
                    className={cn({
                      hidden: formStep == 0,
                    })}
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    variant={"ghost"}
                    className={cn({
                      hidden: formStep == 1,
                    })}
                    onClick={() => {
                      // validation
                      form.trigger(["firstName", "lastName", "placeOfBirth", "dateOfBirth", "gender", "city", "adresseLine", "state", "country", "zipCode", "phoneNumberOne", "phoneNumberTwo", "emailAddress"])
                      const firstNameState = form.getFieldState("firstName")
                      const lastNameState = form.getFieldState("lastName")
                      const placeOfBirthState = form.getFieldState("placeOfBirth")
                      const dateOfBirthState = form.getFieldState("dateOfBirth")

                      if (!firstNameState.isDirty || firstNameState.invalid) return
                      if (!lastNameState.isDirty || lastNameState.invalid) return
                      if (!placeOfBirthState.isDirty || placeOfBirthState.invalid) return
                      if (!dateOfBirthState.isDirty || dateOfBirthState.invalid) return

                      setFormStep(1);
                    }}
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  
                </div>
              </CardFooter>
              
            </form>
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