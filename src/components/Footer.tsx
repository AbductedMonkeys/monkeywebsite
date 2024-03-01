"use client"
import monkeyTrans from './Monkey_trans.png';
import {AiFillYoutube, AiFillLinkedin} from 'react-icons/ai';
import {FaSquareXTwitter} from 'react-icons/fa6';
import {FaTiktok} from 'react-icons/fa'
import { MdMail } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from "next/navigation";


function Footer() {
  const pathname = usePathname();
  return (
  <>
  <footer className={`pb-2 w-full ${pathname == '/Lockjaw' ? "bg-lGray" : "bg-grimace"}`} >
  <div className="inline-flex mx-auto w-full justify-center pt-9">
    <div className="mb-8">
      <Link target='_blank' href="https://www.tiktok.com/@abductedmonkeys" className=" flex mx-5 text-4xl hover:text-mTan text-mPink ">
        <FaTiktok/>
      </Link>
    </div>
    <div className="mb-8 ">
      <Link target='_blank' href="https://twitter.com/Abduct3dMonkeys" className=" flex mx-5 text-4xl hover:text-mTan text-mPink ">
        <FaSquareXTwitter/>
      </Link>
    </div>
    <div className="mb-8  ">
      <Link target='_blank' href="https://www.youtube.com/@AbductedMonkeys" className=" flex mx-5 text-4xl hover:text-mTan text-mPink ">
        <AiFillYoutube/>
      </Link>
    </div>
    <div className="mb-8  ">
      <Link target='_blank' href='https://www.linkedin.com/company/abductedmonkeys/' className='flex mx-5 text-4xl hover:text-mTan text-mPink '>
        <AiFillLinkedin />
      </Link>
    </div>
    <div className="mb-8  ">
      <Link target='_blank' href='mailto:contact@abductedmonkeys.com' className='flex mx-5 text-4xl hover:text-mTan text-mPink '>
        <MdMail />
      </Link>
    </div>
  </div>

  <div
    className= {`p-4 text-center text-mPink ${pathname == '/Lockjaw' ? "bg-lGray" : "bg-grimace"}`}>
    <p
      className="text-mPink "
      >Abducted Monkeys LLC</p>
  </div>
</footer>
  </>
);

}

export default Footer;
