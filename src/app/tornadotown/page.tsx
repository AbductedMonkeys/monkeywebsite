import {AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import { Metadata } from "next";
import { FaSteam } from "react-icons/fa";
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.abductedmonkeys.com'),
  title: "Trouble in Tornado Town",
  description: "Singleplayer Physics Destruction Game",
  keywords: ['Game', 'Single Player Game','ttt', 'tornado town', 'trouble in tornado town', 'tornado game', 'arcade', 'cartoon', 'kid', 'ipad', 'simple', 'silly', 'goofy', 'casual', 'simple' ],
  authors: [
    {name: 'Matt Miholics'}, 
    {name: 'Abducted Monkeys LLC'}
],
  openGraph:{
    
      type: "website",
      url: "https://www.abductedmonkeys.com/tornadotown",
      title: "Trouble in Tornado Town",
      description: "Singleplayer Physics Destruction Game",
      siteName: "Trouble in Tornado Town",
      images: [{
        url: "https://www.abductedmonkeys.com/tornadotown/tornadotownopengraphthumbnail.png",
      }]
  },alternates: {
    canonical: '/tornadotown',
  }
};

export default function TroubleinTornadoTown() {
  return (

    <>
    {/* <div className="flex items-center justify-center h-96 bg-local bg-center bg-cover" style={{backgroundImage : `url(${lockjawLogoTrans.src})`}}> </div> */}
    {/* */}
    <div className="text-mPink bg-grimace h-full justify-center md:py-32 items-center flex flex-col ">
    <div className='lg:border-mPink lg:border-b-2 w-full lg:w-3/4'>
        <h1 className="font-bold text-center text-5xl lg:text-8xl mt-20 md:my-10">TROUBLE IN TORNADO TOWN</h1>
    </div>
    
        <div className='w-full md:w-3/4 h-auto justify-center flex flex-col xl:flex-row'>
            <div className='h-fit w-full px-6 text-lg md:text-3xl pt-20 text-center items-center'>
                <iframe className='aspect-video w-full h-full self-center' src="https://www.youtube.com/embed/hGGUxUcCCVw" title="Lockjaw: Robo-Royale Gameplay Trailer - New Demo Out Now!"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                <div className='inline-flex justify-between md:justify-center content-center w-full my-10 lg:m-5'>
                    <div className='flex center px-6 md:mx-20 text-mPink'>
                        <Link href={"https://store.steampowered.com/app/2180060/Trouble_in_Tornado_Town/"} target='_blank'>
                            <FaSteam className='text-5xl hover:text-mTan' />
                        </Link>
                    </div>
                    <div className='flex outline outline-mPink px-6 md:mx-20 group hover:bg-mPink rounded-xl'>
                        <Link href={"https://drive.google.com/drive/folders/1XhlMzCkKwPJj6o7G-fsYHHS5hxFtRAZt?usp=sharing"} target='_blank'>
                            <div className='p-3 text-sm md:text-base text-mPink group-hover:text-mTan'>
                                Press Kit
                            </div>
                        </Link>
                    </div>     
                </div>  
            </div>
            <div className='h-auto xl:w-1/2 w-full pb-6 px-6 text-lg md:text-4xl 3xl:text-5xl items-center self-center text-center'>
                <p className="py-5 px-5 text-left">Play as a tornado and try to destroy as much of of the landscape as possible, as quickly as possible!</p>
                <p className="2xl:py-5 px-5 text-left hidden 2xl:block">Welcome to Tornado Town, a place so lovely you&apos;ll be blown away! Trouble in Tornado town is a physics-driven cartoon destruction game where you grow into the most powerful tornado ever seen!</p>
            </div>
            
        </div> 
        <div className='h-auto w-full lg:w-3/4 px-6 text-lg md:text-3xl 3xl:text-5xl items-center text-center'>
        <p className="py-5 px-5 text-left 2xl:hidden">Welcome to Tornado Town, a place so lovely you&apos;ll be blown away! Trouble in Tornado town is a physics-driven cartoon destruction game where you grow into the most powerful tornado ever seen!</p>
        </div>
    </div>
    </>
  );
}
