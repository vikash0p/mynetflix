"use client";
import Link from "next/link";
import { Sidebar } from "./Sidebar";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Signup" },
];

const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0 right-0 z-20 ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href={"/"} className="text-2xl font-bold  font-mono">
    <Image src={'/logo.png'} alt="logo" className="w-32 h-12 object-contain" width={128} height={48} />
          </Link>
        </div>
        <div className="hidden md:block f">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="space-x-3">
              <span className=" text-lg font-semibold px-4 ">
                {link.label}
              </span>
            </Link>
          ))}
          <ModeToggle/>
        </div>
        <div className="md:hidden">
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
