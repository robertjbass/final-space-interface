import Link from "next/link";
export const navbarHeight = 56;

export default function Navbar() {
  return (
    <nav
      style={{ height: navbarHeight }}
      className="bg-gray-300 flex justify-center"
    >
      <ul className="flex flex-row justify-between items-center max-w-lg gap-4">
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
    </nav>
  );
}
