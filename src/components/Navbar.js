import { Menu, Search } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto flex my-10 items-center justify-between">
      <a href="/">
        <Image src="/logo.png" alt="logo" width={153} height={31} />
      </a>

      <ul className="flex gap-16 font-medium text-lg">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Daily Life</a>
        </li>
        <li>
          <a href="/facts">Facts</a>
        </li>
        <li className="flex gap-6">
          <Search />
          <Menu />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
