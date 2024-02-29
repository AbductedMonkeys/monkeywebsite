
import {AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import threeMonkeys from "/public/threemonkeys.jpg"
import CustSwiper from '@/components/CustSwiper';



export default function Home() {
 
  return (
    <> 
      
      <div id="TiTT" className=" bg-mTan h-full w-full top-40 pt-20 pb-6 px-6">
          <div ></div>
          <div  className="text-mPink bg-grimace rounded-lg text-lg md:text-3xl py-10 px-4 text-center items-center">
            <h1 className="font-bold text-center text-3xl md:text-8xl">ABOUT</h1>
            <Image alt="Abducted Monkeys Team" src ={threeMonkeys} className="py-4 inline-flex justify-center"/>
            <p className="py-5 px-5 text-left">Abducted Monkeys is a small team of students developing our indie action game Trouble in Tornado Town. We strive to develop compact, enjoyable experiences for players of all skill levels.</p>
            <p className="py-5 px-5 text-left">All of our developers are currently studying Game Design and Production at Drexel University. Trouble in Tornado Town was developed during the 3rd year of our studies and we owe a great deal of gratitude to our professors at Drexels Entrepreneurial Game Studio for their advice and industry know-how.</p>
            <div className="items-center my-3">

            </div>
          
          </div>
      </div>

    </>
  );
}
