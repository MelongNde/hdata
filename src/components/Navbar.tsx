"use client"

// Lib imports
import { useState } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'

// Local files imports
// import '@/styles/styles'
import logo from '@/assets/logo.png'
import menu from "@/assets/menu.svg"
import close from '@/assets/close.svg'
import { navLinks } from '../constants'
// import { Button } from './ui/Button'

import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'

import Link from 'next/link'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'


const Navbar = async () => {

  // const session = await getServerSession(authOptions)

  const [active, setActive] = useState("Home")
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="bg-white  w-full z-200 top-0 left-0 py-6">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
            <Image src={logo} className="w-[124px]" alt='logo' />
        </a>
        <div className="flex gap-2 md:order-2">
            <ThemeToggle />
            <LanguageToggle />
            <Link href="login">
              <Button>Login</Button>
            </Link>
            <Button 
              data-collapse-toggle="navbar-sticky"  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"
              onClick={() => {
                console.log('Toggled')
                setToggle(!toggle)
              }}
              >
              <span className="sr-only">Open main menu</span>
              {/* <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg> */}
              <Menu />
            </Button>
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } w-full p-6 bg-black-gradient md:hidden absolute bg-white top-20 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex text-blackk  justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-semibold hover:text-foreground transition ease-in-out delay-150cursor-pointer text-[16px] ${
                  active === nav.title ? "text-primary-800" : "text-dark-700"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className=" flex flex-col p-4 text-blackk md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-red-500 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            
            {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-semibold hover:text-primary transition ease-in-out delay-150 cursor-pointer text-[16px] ${
                active === nav.title ? "text-primary" : "text-foreground"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a className='block py-2 pl-3 pr-4' href={`#${nav.id}`}>{nav.title}</a>
            </li>
            ))}
          </ul>      
        </div>
      </div>
    </nav>
  )
}

export default Navbar