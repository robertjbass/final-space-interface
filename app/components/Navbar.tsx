"use client";

import Menu from "@/app/components/Menu";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

// export const navbarHeight = 10;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((state) => !state);

  const Icon = isOpen ? XMarkIcon : Bars4Icon;

  return (
    <>
      <nav
        // style={{ height: navbarHeight }}
        className="bg-white flex items-center border-b-[1px] border-slate-300 h-[10vh]"
      >
        <ul className="flex justify-between items-center px-4 w-full">
          <Image
            src="/assets/final-space-logo.png"
            width={60}
            height={60}
            alt="Logo"
          />

          <Icon className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
        </ul>
      </nav>
      {isOpen && <Menu />}
    </>
  );
}
