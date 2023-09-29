"use client"

// Lib imports
import { useState } from 'react'
import Image from 'next/image'

// Local files imports
// import '@/styles/styles'
import logo from '@/assets/logo.png'
import menu from "@/assets/menu.svg"
import close from '@/assets/close.svg'
import { navLinks } from '../constants'
// import { Button } from './ui/button'

const Navbar = () => {
const [active, setActive] = useState("Home")
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="bg-white  w-full z-20 top-0 left-0 py-6">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
            <Image src={logo} className="w-[124px]" alt='logo' />
        </a>
        <div className="flex md:order-2">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
            <button 
              data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"
              onClick={() => {
                console.log('Toggled')
                setToggle(!toggle)
              }}
              >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } w-full p-6 bg-black-gradient md:hidden absolute bg-white top-20 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex  justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-semibold hover:text-primary-900 transition ease-in-out delay-150cursor-pointer text-[16px] ${
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
          <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-red-500 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            
            {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-semibold hover:text-primary-900 transition ease-in-out delay-150 cursor-pointer text-[16px] ${
                active === nav.title ? "text-primary-800" : "text-dark-900"
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