'use client';

import React from 'react'
import Image from 'next/image';
import logo from '../../public/FeastBud-logo.png';
import { SignOutButton } from './SignOutButton'
import { useRouter } from 'next/navigation';

export default function NavBar({user}: any) {
  const router = useRouter();

  console.log("user in navbar", user)
  return (
    <nav className="bg-white dark:bg-gray-900 relative w-full z-20 top-0">
      <div className="flex flex-wrap justify-between items-center mx-12">
        <div className="flex gap-20">
          <div className="flex items-center">
            <button className="relative h-full" type="button" onClick={() => router.push('/')}>
              <Image
                src={logo}
                width={100}
                height={100}
                priority
                style={{ objectFit: 'contain' }}
                alt="FeastBud Logo"
                className="float-left hidden sm:flex sm:w-24"
              />
            </button>
            <span className="text-2xl">FeastBud</span>
          </div>

          <div className="items-center justify-between gap-10 hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Recipes</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Planner</a>
              </li>
            </ul>          
          </div>
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <SignOutButton />
            ): ( 
              <div className="flex md:space-x-8 font-medium">
                <button><a href="/login">Contact</a></button>
                <button><a href="/login">Sign in</a></button>
              </div>
            )}

            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
      </div>
    </nav>
    // <div className="relative bg-red-200">
    //     <div className="flex flex-row justify-between p-4 mx-12">
    //         <div>
    //             FeastBud
    //         </div>
    //         <div>
    //             <SignOutButton />
    //         </div>
    //     </div>
    // </div>
  )
}
