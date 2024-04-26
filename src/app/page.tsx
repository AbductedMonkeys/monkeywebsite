
import {AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import threeMonkeys from "/public/threemonkeys.jpg"
import lockjawThum from '../../public/lockjaw/lockjawopengraphthumbnail.png'
import tornadoThum from '../../public/tornadotown/tornadotownopengraphthumbnail.png'
import Link from 'next/link';


export default function Home() {
 
  return (
    <> 
      
      <div className="text-mPink bg-grimace h-full justify-center md:py-20 items-center flex flex-col ">
      <div className='lg:border-mPink lg:border-b-2 w-full lg:w-3/4'>
        <h1 className="font-bold text-center text-5xl lg:text-8xl mt-20 md:my-10">ABOUT</h1>
      </div>
        <div className='w-full md:w-3/4 justify-center flex flex-col xl:flex-row'>
            <div className='h-fit w-full 2xl:w-auto pb-6 px-6 text-lg md:text-3xl py-10 text-center items-center rounded-2xl'>
              <Image alt="Abducted Monkeys Team" src ={threeMonkeys} className="md:py-4 inline-flex justify-center rounded-2xl"/> 
            </div>
            <div className='h-auto w-full pb-6 px-6 text-lg md:text-3xl md:py-10 2xl:text-5xl 2xl:self-center items-center'>
                <p className="py-5">Abducted Monkeys is an indie game studio currently working on casual action games. The Monkeys have been developing games since 2022. In 2023 we released our first single-player action game, <Link className='underline hover:text-mTan' href={'/tornadotown'}>Trouble in Tornado Town.</Link></p>
                <p className="py-5">We are currently working on <Link className='underline hover:text-mTan' href={'/lockjaw'}>Lockjaw: Robo-Royale</Link>, a local-multiplayer robot brawler.</p>
            </div>
            </div>
        <div className='w-full md:w-3/4 justify-center flex flex-col xl:flex-row-reverse'>
            <div className='h-auto w-full pb-6 px-6 text-lg md:text-3xl md:py-10 justify-end items-center rounded-lg'>
              <Link href={"/lockjaw"}>
                <Image alt="Abducted Monkeys Team" src ={lockjawThum} className="rounded-2xl inline-flex justify-center hover:animate-bounce"/> 
              </Link> 
            </div>
            <div className='h-auto w-full 2xl:w-auto pb-6 px-6 text-xl md:text-3xl 2xl:text-5xl 2xl:self-center py-10'>
              <p><Link className='underline hover:text-mTan' href={'/lockjaw'}>Lockjaw</Link> is a bombastic robot party brawler where you interchange a variety of wacky parts to knock your opponents off the stage to win a robo-royale!</p>
            </div>
            
        </div>
        <div className='w-full md:w-3/4 justify-center flex flex-col xl:flex-row'>
            <div className='h-auto w-full 2xl:w-auto pb-6 px-6 text-lg md:text-3xl md:py-10 items-center rounded-lg '>
              <Link href={"/tornadotown"}>
                <Image alt="Abducted Monkeys Team" src ={tornadoThum} className="h-fit rounded-2xl  inline-flex justify-center hover:animate-spin"/> 
              </Link>
            </div>
          
            <div className='h-auto w-full pb-6 px-6 text-xl md:text-3xl 2xl:text-5xl 2xl:self-center py-10'>
              <p>Welcome to Tornado Town! It&apos;s a place so lovely, you&apos;ll be blown away! <Link className='underline hover:text-mTan' href={'/tornadotown'}>Trouble in Tornado Town</Link> is a physics-driven cartoon destruction game, where you grow into the most powerful tornado ever seen!</p>
            </div>
        </div>
        
    </div>
 
    </>

  );
}
