"use client";

import Container from "@/app/components/Container";
import Menu from "@/app/components/Menu";
import { Bars4Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// export const navbarHeight = 10;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((state) => !state);

  return (
    <>
      <nav
        // style={{ height: navbarHeight }}
        className="bg-white flex items-center border-b-[1px] border-slate-300 h-[10vh]"
      >
        <Container className="flex justify-between items-center w-full">
          <Image
            src="/assets/final-space-logo.png"
            width={60}
            height={60}
            alt="Logo"
          />

          <ul className="gap-4 hidden xs:flex">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/characters" className="hover:underline">
                Characters
              </Link>
            </li>
            <li>
              <Link href="/episodes" className="hover:underline">
                Episodes
              </Link>
            </li>
            <li>
              <Link href="/locations" className="hover:underline">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/quotes" className="hover:underline">
                Quotes
              </Link>
            </li>
          </ul>

          <Bars4Icon
            className="h-6 w-6 cursor-pointer xs:hidden"
            onClick={toggleMenu}
          />
        </Container>
      </nav>
      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </>
  );
}
