"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../public/FeastBud-logo.png";
import { SignOutButton } from "./SignOutButton";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function NavBar({ user }: { user?: string | null }) {
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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as HTMLDivElement)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="overflow-hidden border-b border-orange-100 bg-[#fffaf2] text-stone-900 dark:border-[#222222] dark:bg-black dark:text-orange-50">
      <div className="flex mx-4 sm:mx-12">
        <div className="relative flex w-full items-center">
          <div className="flex gap-12 items-center">
            <div className="flex items-center">
              <button
                className="relative w-20"
                type="button"
                onClick={() => router.push("/")}
              >
                <Image
                  src={logo}
                  width={500}
                  height={500}
                  priority
                  // style={{ objectFit: 'contain' }}
                  alt="FeastBud Logo"
                  className="object-cover"
                />
              </button>
              <Link href="/" className="hidden md:flex text-2xl">
                FeastBud
              </Link>
            </div>

            <div
              className="hidden w-full md:flex md:w-auto"
              id="navbar-default"
            >
              <ul className="text-black dark:text-white font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <Link
                    href="/"
                    className={`${pathname === "/" ? "text-orange-500" : ""} block py-2 px-3 rounded-lg transition ease-in-out delay-50 hover:bg-neutral-200/50 md:p-2`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/recipes"
                    className={`${pathname === "/recipes" ? "text-orange-500" : ""} block py-2 px-3 rounded-lg transition ease-in-out delay-50 hover:bg-neutral-200/50 md:hover:bg-bg-gray-900 md:border-0 md:p-2`}
                  >
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className={`${pathname === "/products" ? "text-orange-500" : ""} block py-2 px-3 rounded-lg transition ease-in-out delay-50 hover:bg-neutral-200/50 md:hover:bg-bg-gray-900 md:border-0 md:p-2`}
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Theme toggle, contact and SignIn button for large screens */}
            <div className="absolute right-0 hidden lg:flex items-center space-x-3 xl:space-x-6 rtl:space-x-reverse">
              <Button
                asChild
                variant="contact"
                size="contact"
                className="text-textNavLight"
              >
                <Link href="/contact">Contact</Link>
              </Button>
              {user ? (
                <div className="flex flex-row items-center justify-between text-sm font-medium">
                  {user}
                </div>
              ) : (
                <div className="hidden md:flex">
                  <Button asChild variant="signIn" size="signIn">
                    <Link href="/login">
                      {/* <UserRound className="h-5 w-5" /> */}
                      Sign in
                    </Link>
                  </Button>
                </div>
              )}
              <ThemeToggle />
            </div>

            {/* Content for smaller screen sizes, all inside sheet */}
            <div className="absolute right-0">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button
                    data-collapse-toggle="navbar-cta"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-textNavLight rounded-full lg:hidden hover:bg-textNavLight/20 focus:outline-none"
                    aria-label="Open navigation"
                    aria-controls="navbar-cta"
                    aria-expanded={isOpen}
                  >
                    <span className="sr-only">Open navigation bar</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      <div className="px-2">Main navigation</div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="px-2 pt-4 space-y-4">
                    {user ? (
                      <SignOutButton />
                    ) : (
                      <Button
                        asChild
                        className="mb-2 w-full dark:bg-white dark:hover:bg-bgLight"
                      >
                        <Link href="/login">Login</Link>
                      </Button>
                    )}
                    {/* <Button className="w-full mb-2 dark:hover:bg-bgLight dark:bg-white">
                      Login
                    </Button> */}
                    <Button
                      asChild
                      className="w-full bg-neutral-200 text-black hover:bg-neutral-100 dark:bg-orange-400 dark:text-black dark:hover:bg-orange-300"
                    >
                      <Link href="/products">Products</Link>
                    </Button>

                    <ul className="flex flex-col space-y-4 pt-2 font-medium">
                      <li>
                        <Link
                          href="/"
                          className="inline-flex items-center w-full px-2 gap-4 h-10 rounded-lg hover:bg-bgLight dark:hover:bg-bgLight/50"
                          aria-current={pathname === "/" ? "page" : undefined}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products"
                          className="inline-flex items-center w-full px-2 gap-4 h-10 rounded-lg hover:bg-bgLight dark:hover:bg-bgLight/50"
                          aria-current={
                            pathname === "/products" ? "page" : undefined
                          }
                        >
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/recipes"
                          className="inline-flex items-center w-full px-2 gap-4 h-10 rounded-lg hover:bg-bgLight dark:hover:bg-bgLight/50"
                          aria-current={
                            pathname === "/recipes" ? "page" : undefined
                          }
                        >
                          Recipes
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/checkout"
                          className="inline-flex items-center w-full px-2 gap-4 h-10 rounded-lg hover:bg-bgLight dark:hover:bg-bgLight/50"
                          aria-current={
                            pathname === "/checkout" ? "page" : undefined
                          }
                        >
                          Checkout
                        </Link>
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
