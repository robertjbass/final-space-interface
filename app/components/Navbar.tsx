"use client";

import Menu from "@/app/components/Menu";
import Search from "@/app/components/Search";
import Container from "@/app/components/ui/Container";
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
        className="bg-white flex items-center border-b-[1px] border-slate-300 h-[12vh] fixed top-0 left-0 w-full z-10"
      >
        <Container className="flex justify-between items-center gap-4">
          <Image
            src="/assets/final-space-logo.png"
            width={60}
            height={60}
            alt="Logo"
          />

          <div className="flex w-full justify-center items-center ">
            <Search />

            <ul className="gap-4 hidden w-fit mx-auto text-slate-500 font-light md-2:flex md-2:-order-1">
              <li>
                <Link
                  href="/characters"
                  className="hover:underline hover:text-slate-700 "
                >
                  Characters
                </Link>
              </li>
              <li>
                <Link
                  href="/episodes"
                  className="hover:underline hover:text-slate-700 "
                >
                  Episodes
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:underline hover:text-slate-700 "
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/quotes"
                  className="hover:underline hover:text-slate-700 "
                >
                  Quotes
                </Link>
              </li>
            </ul>
          </div>

          <Bars4Icon
            className="h-8 w-8 cursor-pointer md-2:hidden"
            onClick={toggleMenu}
          />
        </Container>
      </nav>
      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </>
  );
}
