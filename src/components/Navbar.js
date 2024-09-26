import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto flex my-10 items-center justify-between">
      <a href="/">
        <Image src="/logo.png" alt="logo" width={153} height={31} />
      </a>

      <div className="flex gap-16">
        <ul className="gap-16 text-sm font-medium items-center hidden md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#fact1">Facts</Link>
          </li>
          <li>
            <Link href="#explore">Explore</Link>
          </li>
        </ul>
        <div className="flex gap-6">
          <Search className="cursor-pointer"/>
          <Menu className="cursor-pointer"/>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
