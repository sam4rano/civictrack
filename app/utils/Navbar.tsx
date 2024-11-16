"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {  HiOutlineMenu } from "react-icons/hi";
import { useCallback } from "react";
import { usePathname } from "next/navigation";

interface NavData {
  id: number;
  name: string;
  url: string;
}

const navData: NavData[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Record",
    url: "/record",
  },
  {
    id: 4,
    name: "politician",
    url: "/politician",
  },
  {
    id: 5,
    name: "Region",
    url: "/region",
  },
  {
    id: 6,
    name: "search",
    url: "/search",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = useCallback((path: string) => pathname === path, [pathname]);
  return (
    <header className="flex flex-row justify-between mx-auto align-middle h-16 w-full shrink-0 items-center px-4 md:px-6 font-kanit">
      <Link href={'/'}>
      <h2 className="text-3xl ">CivicTrack</h2>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden xl:hidden">
            <HiOutlineMenu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <HiOutlineMenu className="h-6 w-6" />
            <span className="sr-only">CivicTrack</span>
          </Link>
          <div className="grid gap-2 py-6">
            {navData.map((data) => (
              <ul key={data.id} className="list-none">
                <Link
              href={data.url}
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-kanit ${
                isActive(data.url)
                  ? "text-pink-500"
                  : "text-black dark:text-white"
              }  `}
              prefetch={false}
            >
              {data.name}
            </Link>
              </ul>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link href={'/'} className="mr-6 hidden xl:flex" prefetch={false}>
        <span className="sr-only text-3xl">CivicTrack</span>
      </Link>
      <nav className="ml-auto hidden xl:flex lg:flex gap-6">
        {navData.map((data) => (
          <ul key={data.id} className="list none">
            <Link
              href={data.url}
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 ${
                isActive(data.url)
                  ? "text-pink-500"
                  : "text-black dark:text-white"
              }  `}
              prefetch={false}
            >
              {data.name}
            </Link>
          </ul>
        ))}
      </nav>
    </header>
  );
}
