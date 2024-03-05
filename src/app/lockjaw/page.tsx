
import React from 'react';
import lockjawHero from '../../../public/lockjaw/libraryhero.webp'
import lockjawLogoTrans from '../../../public/lockjaw/librarylogotransparent.png'
import {lockjawSwiper} from '../../components/sliderimgs'
import Image from 'next/image';
import type { Metadata } from "next";
import { FaSteam } from "react-icons/fa";
import Link from 'next/link';
import CustSwiper from '@/components/CustSwiper';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.abductedmonkeys.com'),
    title: "Lockjaw",
    description: "4 Player Action Party Brawler",
    keywords: ['Lockjaw','Game','Video Game','Robo','Robot','Lockjaw: Robo-Royale','Lockjaw: Robo Royale','Lockjaw: RoboRoyale','Lockjaw: RobotRoyale','Lockjaw: Robot Royale', 'Lockjaw: Robot-Royale','Lockjaw: Robo-Royal','Lockjaw: Robo Royal','Lockjaw: RoboRoyal','Lockjaw: RobotRoyal','Lockjaw: Robot Royal', 'Lockjaw: Robot-Royal','Robo-Royale','Robo Royale','RoboRoyale','RobotRoyale','Robot Royale', 'Robot-Royale','Robo-Royal','Robo Royal','RoboRoyal','RobotRoyal','Robot Royal', 'Robot-Royal','Mulitplayer', 'Co-op', 'Couch Co-op', 'Steam', 'Steam Game', 'Steam Multiplayer', ],
    authors: [
        {name: 'Matt Miholics'}, 
        {name: 'Abducted Monkeys LLC'}
    ],
    openGraph:{
        type: "website",
        url: "https://www.abductedmonkeys.com/lockjaw",
        title: "Lockjaw: Robo-Royale",
        description: "4 Player Action Party Brawler",
        siteName: "Lockjaw",
        images: [{
          url: "https://www.abductedmonkeys.com/lockjaw/lockjawopengraphthumbnail.png",
        }]
    }
  };

const Lockjaw = () => {
    return (
        <>
        <div className="flex items-center justify-center mx-auto h-0 lg:h-screen bg-contain bg-fixed bg-center  lg:bg-cover" style={{backgroundImage : `url(${lockjawHero.src})`}}> 
        <Image 
            alt="Lockjaw Logo" 
            src={lockjawLogoTrans} 
            className='w-20 lg:w-3/4'
        >  
        </Image> 
        </div>
        {/* <div className="flex items-center justify-center h-96 bg-local bg-center bg-cover" style={{backgroundImage : `url(${lockjawLogoTrans.src})`}}> </div> */}
        {/* */}
        <div className="bg-lGray text-white lg:py-20 items-center flex flex-col ">
        <h1 className="font-bold text-center text-5xl mt-40 lg:text-8xl my-20">Lockjaw</h1>
            <div className='w-3/4 justify-center flex flex-col lg:flex-row'>
                <div className='h-auto w-full pb-6 px-6 text-lg md:text-3xl py-10 text-center items-center'>
                    <iframe className='aspect-video w-full h-auto self-center' src="https://www.youtube.com/embed/8W2iGwhywOQ" title="Lockjaw: Robo-Royale Gameplay Trailer - New Demo Out Now!"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <div className='inline-flex justify-center content-center w-full p-5'>
                        <div className='flex center px-2 md:mx-20 text-lOrange'>
                            <Link href={"https://store.steampowered.com/app/2782270/Lockjaw_RoboRoyale/"} target='_blank'>
                                <FaSteam className='text-5xl hover:text-white' />
                            </Link>
                        </div>
                        <div className='flex outline outline-lOrange px-2  md:mx-20 group hover:bg-lOrange rounded-xl'>
                            <Link href={"https://drive.google.com/drive/folders/1U8Fh48_GMZZqPVF2Gwe3rIJsbEdI00e8?usp=sharing"} target='_blank'>
                                <div className='p-3 text-sm md:text-base text-lOrange group-hover:text-white'>
                                    Press Kit
                                </div>
                            </Link>
                        </div>     
                    </div>  
                </div>
                <div className='h-auto w-full pb-6 px-6 text-lg md:text-3xl py-10 items-center text-center'>
                    <p className="py-5 px-5 text-left">Lockjaw is a multiplayer party brawler game where robots use interchangeable arm, leg, and head parts to fight to win a Robo-Royale! </p>
                    <p className="py-5 px-5 text-left">Robots start each match with a blank slate—scramble for arm, leg, and head parts to amplify your capabilities and gain the upper hand. Robots can hold up to 4 parts at a time, so get greedy!</p>
                    <p className="py-5 px-5 text-left">Adapt to the random assortment of parts in each battle. Grapple walls, dodge balls, and lock jaws! Every match is different, so be sure to change up your strategy!</p>
                    <p className="py-5 px-5 text-left">Play Lockjaw with up to four players in local multiplayer or over Steam Remote Play Together!</p>
                </div>
            </div>
            
        </div>

        

        </>
    )
}
export default Lockjaw;
