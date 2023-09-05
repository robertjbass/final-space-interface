"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import Container from "./ui/Container";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Menu = (props: Props) => {
  const handleClose = () => props.setIsOpen(false);

  return (
    <div className="h-screen w-full absolute top-0 left-0 bg-white z-20">
      <div className="border-b-[1px] border-slate-300 h-[12vh] flex justify-between items-center ">
        <Container className="flex justify-between items-center">
          <Image
            src="/assets/final-space-logo.png"
            alt="Logo"
            width={60}
            height={60}
          />

          <XMarkIcon className="w-6 h-6 cursor-pointer" onClick={handleClose} />
        </Container>
      </div>

      <Container className="grid place-items-center content-center h-[90vh]">
        <ul className="flex flex-col text-center gap-2">
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
      </Container>
    </div>
  );
};

export default Menu;
