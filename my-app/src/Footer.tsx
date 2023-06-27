import React, { useState } from 'react';
import './App.css';
import monkeyTrans from './Monkey_trans.png';
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai';
import {FaTiktok} from 'react-icons/fa'


function Footer() {
  
  return (
  <>
  <footer className="bg-grimace pb-2 w-full">
  <div className="inline-flex mx-auto w-full justify-center pt-9">
    <div className="mb-9">
      <a href="https://www.tiktok.com/@abductedmonkeys" className=" flex mx-6 text-4xl text-mPink ">
        <FaTiktok/>
      </a>
    </div>
    <div className="mb-9 ">
      <a href="https://www.tiktok.com/@abductedmonkeys" className=" flex mx-6 text-4xl text-mPink ">
        <AiOutlineTwitter/>
      </a>
    </div>
    <div className="mb-9  ">
      <a href="https://www.youtube.com/@AbductedMonkeys" className=" flex mx-6 text-4xl text-mPink ">
        <AiFillYoutube/>
      </a>
    </div>
  </div>

  <div
    className="p-4 text-center text-mPink bg-grimace">
    <p
      className="text-mPink "
      >Abducted Monkeys LLC</p>
  </div>
</footer>
  </>
);

}

export default Footer;