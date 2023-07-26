import React, { useState } from 'react';
import './App.css';
import monkeyTrans from './Monkey_trans.png';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


function Navbar() {
  let Links =[
    {name:"Trouble in Tornado Town",link:"/#TiTT"},
    {name:"About",link:"/#about"},
    {name:"Contact",link:"/#contact"},
  ];

  let [open,setOpen]=useState(false);
  
  let button;
    if (open) {
      button = <AiOutlineClose className='text-mPink hover:text-mTan'/>;
    } else {
      button = <AiOutlineMenu className='text-mPink hover:text-mTan'/>;
    }

  return (
  <>
  <div className='shadow-md w-full bg-grimace fixed top-0 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
      <img src={monkeyTrans} className='cursor-pointer flex items-center object-contain  h-14 md:h-20'/>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-4 top-6 cursor-pointer md:hidden'>
        {button}
        </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-grimace md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} onClick={() =>setOpen(!open)} className='md:ml-8 text-3xl md:my-0 my-7'>
              <p onClick={() => window.location.replace(link.link)} className='text-mPink hover:text-mTan cursor-pointer duration-500'>{link.name}</p>
            </li>
          ))
        }
      </ul>

    </div>
  </div>
  </>
);

}

export default Navbar;
