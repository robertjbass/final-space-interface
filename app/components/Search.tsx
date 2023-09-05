import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <form className="grid place-items-center w-[90%] md-2:max-w-[250px] relative">
      <input
        type="text"
        placeholder="Search final space"
        className="rounded-md border border-slate-300 py-[0.35rem] px-2 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent w-[90%] font-light md-2:w-[100%]"
      />
      <MagnifyingGlassIcon className="absolute h-5 w-5 text-slate-400 right-6 xs:right-8 sm:right-12  md-2:right-3" />
    </form>
  );
};

export default Search;
