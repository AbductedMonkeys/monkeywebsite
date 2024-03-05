
import {AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import threeMonkeys from "/public/threemonkeys.jpg"
import CustSwiper from '@/components/CustSwiper';
import lockjawThum from '/public/lockjaw/lockjaw_opengraph_thumbnail.png'
import tornadoThum from '/public/tornadotown/tornadotown_opengraph_thumbnail.png'
import Link from 'next/link';


export default function Home() {
 
  return (
    <> 
      
      <div className="text-mPink bg-grimace h-full justify-center lg:py-20 items-center flex flex-col ">
      <h1 className="font-bold text-center text-5xl mt-40 my-20 lg:text-8xl ">ABOUT</h1>
        <div className='w-3/4 justify-center flex flex-col lg:flex-row items-center'>
            <div className='h-auto w-full pb-6 px-6 text-lg md:text-3xl py-10 text-center items-center'>
              <Image alt="Abducted Monkeys Team" src ={threeMonkeys} className="py-4 inline-flex justify-center"/> 
            </div>
            <div className='h-auto w-full pb-6 px-6 text-lg md:text-4xl py-10 items-center'>
                <p className="py-5">Abducted Monkeys is a small team of students developing our indie action game Trouble in Tornado Town. We strive to develop compact, enjoyable experiences for players of all skill levels.</p>
                <p className="py-5">All of our developers are currently studying Game Design and Production at Drexel University. Trouble in Tornado Town was developed during the 3rd year of our studies and we owe a great deal of gratitude to our professors at Drexels Entrepreneurial Game Studio for their advice and industry know-how.</p>
            </div>  
        </div>
        <div className='w-3/4 justify-center items-center flex flex-col lg:flex-row-reverse'>
            <div className='h-auto w-full pb-6 px-6 text-lg md:text-3xl py-10 justify-end items-center rounded-lg'>
              <Link href={"/lockjaw"}>
                <Image alt="Abducted Monkeys Team" src ={lockjawThum} className="rounded-lg py-4 inline-flex justify-center"/> 
              </Link> 
            </div>
            <div className='h-auto w-full pb-6 px-6 text-xl md:text-5xl py-10'>
              <p>Lockjaw is a bombastic robot party brawler where you interchange a variety of wacky parts to knock your opponents off the stage to win a robo-royale!</p>
            </div>
            
        </div>
        <div className='w-3/4 justify-center items-center flex flex-col lg:flex-row'>
            <div className='h-auto w-full pb-6 px-6 text-lg md:text-3xl py-10 items-center rounded-lg '>
              <Link href={"/tornadotown"}>
                <Image alt="Abducted Monkeys Team" src ={tornadoThum} className="rounded-lg py-4 inline-flex justify-center"/> 
              </Link>
            </div>
          
            <div className='h-auto w-full pb-6 px-6 text-xl md:text-5xl py-10'>
              <p>Welcome to Tornado Town! It’s a place so lovely, you'll be blown away! Trouble in Tornado Town is a physics-driven cartoon destruction game, where you grow into the most powerful tornado ever seen!</p>
            </div>
        </div>
        
    </div>

    </>

  );
}
