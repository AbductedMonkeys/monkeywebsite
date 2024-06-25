"use client"
import monkeyTrans from './Monkey_trans.png';
import {AiFillYoutube, AiFillLinkedin} from 'react-icons/ai';
import {FaSquareXTwitter, FaDiscord } from 'react-icons/fa6';
import { FaInstagram } from "react-icons/fa6";
import {FaTiktok} from 'react-icons/fa'
import { MdMail } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from "next/navigation";


function Footer() {
  const pathname = usePathname();
  return (
  <>
  <footer className={`pb-2 w-full ${pathname == '/lockjaw' ? "bg-lGray" : "bg-grimace"}`} >
  <div className={`inline-flex flex-wrap mx-auto w-full justify-center pt-9 border-t-2 ${pathname == '/lockjaw' ? "border-lOrange" : "border-mPink"}`}>
    <div className="mb-8">
      <Link target='_blank' href="https://www.tiktok.com/@abductedmonkeys" className={`flex mx-8 md:mx-5 text-4xl  ${pathname == '/lockjaw' ? "text-lOrange hover:text-white" : "text-mPink hover:text-mTan"}`}>
        <FaTiktok/>
      </Link>
    </div>
    <div className="mb-8 ">
      <Link target='_blank' href="https://twitter.com/Abduct3dMonkeys" className={`flex mx-8 md:mx-5 text-4xl  ${pathname == '/lockjaw' ? "text-lOrange hover:text-white" : "text-mPink hover:text-mTan"}`}>
        <FaSquareXTwitter/>
      </Link>
    </div>
    <div className="mb-8  ">
      <Link target='_blank' href='https://www.instagram.com/abductedmonkeys/' className={`flex mx-8 md:mx-5 text-4xl ${pathname == '/lockjaw' ? "text-lOrange hover:text-white" : "text-mPink hover:text-mTan"}`} >
        <FaInstagram />
      </Link>
    </div>
    <div className="mb-8  ">
      <Link target='_blank' href='https://discord.gg/5fuyqb2rgD' className={`flex mx-8 md:mx-5 text-4xl ${pathname == '/lockjaw' ? "text-lOrange hover:text-white" : "text-mPink hover:text-mTan"}`} >
        <FaDiscord />
      </Link>
    </div>
    <div className="mb-8  ">
      <Link target='_blank' href="https://www.youtube.com/@AbductedMonkeys" className={`flex mx-8 md:mx-5 text-4xl  ${pathname == '/lockjaw' ? "text-lOrange hover:text-white" : "text-mPink hover:text-mTan"}`}>
        <AiFillYoutube/>
      </Link>
    </div>
    <div className="mb-8  ">
      <Link target='_blank' href='https://www.linkedin.com/company/abductedmonkeys/' className={`flex mx-8 md:mx-5 text-4xl ${pathname == '/lockjaw' ? "text-lOrange hover:text-white" : "text-mPink hover:text-mTan"}`} >
        <AiFillLinkedin />
      </Link>
    </div>
    <div className="mb-8  ">
      <Link target='_blank' href='mailto:contact@abductedmonkeys.com' className={`flex mx-8 md:mx-5 text-4xl  ${pathname == '/lockjaw' ? "text-lOrange hover:text-white" : "text-mPink hover:text-mTan"}`}>
        <MdMail />
      </Link>
    </div>
  </div>

  <div
    className= {`p-4 text-center text-mPink ${pathname == '/lockjaw' ? "bg-lGray" : "bg-grimace"}`}>
    <p
      className={`${pathname == '/lockjaw' ? "text-lOrange" : "text-mPink"}`}
      >Abducted Monkeys LLC</p>
  </div>
</footer>
  </>
);

}

export default Footer;
