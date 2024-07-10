"use client"
import monkeyTrans from '../../public/monkeytrans.png';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Image from 'next/image';
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Banner from './Banner';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      text: "Home",
    },
    {
      id: 2,
      link: "tornadotown",
      text: "Trouble in Tornado Town",
    },
    {
      id: 3,
      link: "lockjaw",
      text: "Lockjaw",
    },
    {
      id: 4,
      link: "team",
      text: "Team",
    },
    {
      id: 5,
      link: "press",
      text: "Press",
    },
  ];
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Example to show the banner after 1 second
        setTimeout(() => setShowBanner(true), 300);
    }, []);
  return (
    <>
    <Banner
                buttonText="Lockjaw: Robo-Royale is fully funded from Kickstarter!"
                buttonLink="https://www.kickstarter.com/projects/abductedmonkeys/lockjaw-robo-royale"
                //height="auto"
                backgroundColor="#2bde73"
                buttonBackgroundColor="#2bde73"
            />
            <div className={`flex justify-between items-center w-full h-20 px-4  ${pathname == '/lockjaw' ? "bg-lGray text-lOrange" : "bg-grimace text-mPink"} fixed nav`}>
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
            className={`nav-links px-4 cursor-pointer capitalize text-2xl ${pathname == '/lockjaw' ? "text-lOrange hover:text-white" : "text-mPink hover:text-mTan"} hover:scale-105  duration-200 link-underline`}
          >
            <Link href={link}>{text}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointer pr-4 z-10 ${pathname == '/lockjaw' ? "text-lOrange" : "text-mPink"} md:hidden`}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className={`flex flex-col justify-center text-center items-center ${pathname == '/lockjaw' ? "bg-lGray" : "bg-grimace"} absolute top-0 left-0 w-full h-screen`}>
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
    </>
    
  );
};

export default Navbar;
