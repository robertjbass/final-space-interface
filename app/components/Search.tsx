"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  //update url on change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    router.push(`${pathname}?query=${e.target.value}`);
  };

  return (
    <form className="grid place-items-center w-[90%] md-2:max-w-[250px] relative">
      <input
        type="text"
        placeholder="Search"
        className="rounded-md border border-slate-300 py-[0.35rem] px-2 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent w-[90%] font-light md-2:w-[100%]"
        value={query}
        onChange={handleChange}
      />
      <MagnifyingGlassIcon className="absolute h-5 w-5 text-slate-400 right-6 xs:right-8 sm:right-12  md-2:right-3" />
    </form>
  );
};

export default Search;
