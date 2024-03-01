"use client"
import monkeyTrans from '../../public/Monkey_trans.png';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Image from 'next/image';
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "TornadoTown",
      text: "Trouble in Tornado Town",
    },
    {
      id: 2,
      link: "Lockjaw",
      text: "Lockjaw",
    },
    {
      id: 3,
      link: "Team",
      text: "Team",
    },
  ];
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    
    <div className={`flex justify-between items-center w-full h-20 px-4 text-mPink ${pathname == '/Lockjaw' ? "bg-lGray" : "bg-grimace"} fixed nav`}>
      <div >
          <Link
            className="link-underline link-underline-black"
            href="/"
            rel="noreferrer"
          >
           <Image 
           alt = "Abducted Monkeys Logo"
           className="cursor-pointer flex items-center object-contain w-fit h-14 md:h-20"
           src = {monkeyTrans}
           />
          </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, text }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize text-2xl text-mPink hover:scale-105 hover:text-mTan duration-200 link-underline"
          >
            <Link href={link}>{text}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-mPink md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className={`flex flex-col justify-center items-center ${pathname == '/Lockjaw' ? "bg-lGray" : "bg-grimace"} absolute top-0 left-0 w-full h-screen`}>
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
