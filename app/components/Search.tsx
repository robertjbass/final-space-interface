import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <form className="grid place-items-center md:w-[220px] lg:w-[280px] relative">
      <input
        type="text"
        placeholder="Search"
        className="rounded-md border border-slate-300 py-[0.35rem] px-2 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent w-[90%] font-light md:w-[100%]"
      />
      <MagnifyingGlassIcon className="absolute h-5 w-5 text-slate-400 right-3" />
    </form>
  );
};

export default Search;
