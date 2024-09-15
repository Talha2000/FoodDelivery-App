'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import logo from '../../public/FeastBud-logo.png';
import { SignOutButton } from './SignOutButton';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export default function NavBar({ user }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // const toggleSheet = () => {
  //   setIsOpen(!isOpen);
  //   console.log(isOpen);
  // };

  // use effect to handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLDivElement)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#fffefc] dark:bg-[#0e0f11] overflow-hidden text-black dark:text-white">
      <div className="flex mx-4 sm:mx-12">
        <div className="relative flex w-full items-center">
          <div className="flex gap-12 items-center">
            <div className="flex items-center">
              <button className="relative w-20" type="button" onClick={() => router.push('/')}>
                <Image
                  src={logo}
                  width={500}
                  height={500}
                  // priority
                  // style={{ objectFit: 'contain' }}
                  alt="FeastBud Logo"
                  className="object-cover"
                />
              </button>
              <a href="/" className="hidden md:flex text-2xl">FeastBud</a>
            </div>

            <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
              <ul className="text-black dark:text-white font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <a href="/" className={`${pathname === '/' ? 'text-orange-500' : ''} block py-2 px-3 rounded-lg transition ease-in-out delay-50 hover:bg-neutral-200/50 md:p-2`} aria-current="page">Home</a>
                </li>
                <li>
                  <a href="/recipes" className={`${pathname === '/recipes' ? 'text-orange-500' : ''} block py-2 px-3 rounded-lg transition ease-in-out delay-50 hover:bg-neutral-200/50 md:hover:bg-bg-gray-900 md:border-0 md:p-2`}>Recipes</a>
                </li>
                <li>
                  <a href="/myPlanner" className={`${pathname === '/myPlanner' ? 'text-orange-500' : ''} block py-2 px-3 rounded-lg transition ease-in-out delay-50 hover:bg-neutral-200/50 md:hover:bg-bg-gray-900 md:border-0 md:p-2`}>My Planner</a>
                </li>
                <li>
                  <a href="/blogs" className={`${pathname === '/blogs' ? 'text-orange-500' : ''} block py-2 px-3 rounded-lg transition ease-in-out delay-50 hover:bg-neutral-200/50 md:hover:bg-bg-gray-900 md:border-0 md:p-2`}>Blogs</a>
                </li>
              </ul>
            </div>

            {/* Theme toggle, contact and SignIn button for large screens */}
            <div className="absolute right-0 hidden lg:flex items-center space-x-3 xl:space-x-6 rtl:space-x-reverse">
              <Link href="/contact">
                <Button variant="contact" size="contact" className="text-textNavLight">
                  Contact
                </Button>
              </Link>
              {user ? (
                <div className="flex flex-row items-center justify-between">
                  {/* <UserMenu name={session?.user.name} /> */}
                  test
                </div>
              ) : (
                <div className="hidden md:flex">
                  <Link href="/login">
                    <Button variant="signIn" size="signIn">
                      {/* <UserRound className="h-5 w-5" /> */}
                      Sign in
                    </Button>
                  </Link>
                </div>
              )}
              <ThemeToggle />
            </div>

            {/* Content for smaller screen sizes, all inside sheet */}
            <div className="absolute right-0">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-textNavLight rounded-full lg:hidden hover:bg-textNavLight/20 focus:outline-none" aria-label="Nav Button" aria-controls="navbar-cta" aria-expanded="false">
                    <span className="sr-only">Open navigation bar</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      <div className="px-2">
                        {/* {`Welcome, ${session?.user.name || 'Guest'}`} */}
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="px-2 pt-4 space-y-4">
                    {user ? (
                      <SignOutButton />
                    ) : (
                      <Link href="/login">
                        <Button className="w-full mb-2 dark:hover:bg-bgLight dark:bg-white">
                          Login
                        </Button>
                      </Link>
                    )}
                    {/* <Button className="w-full mb-2 dark:hover:bg-bgLight dark:bg-white">
                      Login
                    </Button> */}
                    <Link href="#contact">
                      <Button className="w-full bg-neutral-200 text-black hover:bg-neutral-100 dark:bg-blue-300 dark:hover:bg-blue-300/80">
                        Contact Us
                      </Button>
                    </Link>

                    <ul className="flex flex-col space-y-4 pt-2 font-medium">
                      <li>
                        <a href="/" className="inline-flex items-center w-full px-2 gap-4 h-10 rounded-lg hover:bg-bgLight dark:hover:bg-bgLight/50" aria-current="page">
                          {/* <HomeIcon /> */}
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/products" className="inline-flex items-center w-full px-2 gap-4 h-10 rounded-lg hover:bg-bgLight dark:hover:bg-bgLight/50" aria-current="page">
                          {/* <ShoppingCart /> */}
                          Products
                        </a>
                      </li>
                      <li>
                        <a href="/pricing" className="inline-flex items-center w-full px-2 gap-4 h-10 rounded-lg hover:bg-bgLight dark:hover:bg-bgLight/50" aria-current="page">
                          {/* <GemIcon /> */}
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a href="/services" className="inline-flex items-center w-full px-2 gap-4 h-10 rounded-lg hover:bg-bgLight dark:hover:bg-bgLight/50" aria-current="page">
                          {/* <BriefcaseBusiness /> */}
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="/docs" className="inline-flex items-center w-full gap-4 px-2 h-10 rounded-lg hover:bg-bgLight dark:hover:bg-bgLight/50" aria-current="page">
                          {/* <BookText /> */}
                          Docs
                        </a>
                      </li>
                    </ul>

                    <div className="mx-2 inline-flex bg-bgDark rounded-lg">
                      <ThemeToggle />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
