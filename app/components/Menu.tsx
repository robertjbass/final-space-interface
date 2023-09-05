import Link from "next/link";

const Menu = () => {
  return (
    <div className="grid place-items-center content-center h-[90vh]">
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
    </div>
  );
};

export default Menu;
