import React from 'react';
import lockjawLogo from '/public/lockjawLogo.jpg';
import lockjawHero from '../../../public/lockjaw/library_hero.png'
import lockjawLogoTrans from '../../../public/lockjaw/library_logo_transparent.png'
import Image from 'next/image';
import type { Metadata } from "next";
import { FaSteam } from "react-icons/fa";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Lockjaw",
    description: "4 Player Action Party Brawler",
    keywords: [],
    openGraph:{
        type: "website",
        url: "https://www.abductedmonkeys.com/Lockjaw",
        title: "Lockjaw: Robo-Royale",
        description: "4 Player Action Party Brawler",
        siteName: "Lockjaw",
        images: [{
          url: "https://mattmiholics.github.io/personal-site-next/images/mailbox/mailboxscreenshot.jpg",
        }]
    }
  };

const Lockjaw = () => {
    return (
        <>
        
        <Image 
                alt="Lockjaw Logo" 
                src={lockjawHero} 
                className="flex items-center justify-center h-screen  bg-fixed bg-center bg-cover"
            />
        <div className="bg-lGray text-white h-full items-center flex flex-col ">
        <h1 className="font-bold text-center text-3xl md:text-8xl mt-20">Lockjaw</h1>
            <div className='w-3/4 justify-center grid grid-row-1 md:grid-row-2'>
                <div className='w-full flex flex-row'>
                    <div className='h-auto w-full pb-6 px-6 text-lg md:text-3xl py-10 text-center'>
                        
                            
                        <p className="py-5 px-5 text-left">Welcome to Lockjaw, where its every robot for themselves in the tournament of the century!</p>
                        <p className="py-5 px-5 text-left">Grab parts laying around and knock them off others! Starting off with just your robotic core, scavenge parts to ensure your robot’s survival. With four slots on every robot, mix and match parts—each engagement is sure to grind some gears. Pack some heat with the dodgeball launcher to send robots flying, or deliver a powered-up punch with The Tenderizer!</p>
                        <p className="py-5 px-5 text-left">Every gadget can make an impact in the dynamic battles of Lockjaw. Gear up and join the robotic rumble today!</p>
                    </div>
                    <div className='h-auto w-full pb-6 px-6 text-lg md:text-3xl py-10 text-center items-center'>
                    <iframe className='aspect-video w-full h-auto self-center' src="https://www.youtube.com/embed/8W2iGwhywOQ" title="Lockjaw: Robo-Royale Gameplay Trailer - New Demo Out Now!"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <div className='inline-flex justify-around content-center w-full py-5'>
                        <div className='flex center'>
                            <Link href={"https://store.steampowered.com/app/2782270/Lockjaw_RoboRoyale/"}>
                                <FaSteam className='text-5xl hover:text-lOrange' />
                            </Link>
                        </div>
                        <div className='flex outline outline-lOrange group hover:bg-lOrange rounded-xl'>
                            <Link href={""}>
                            <div className='px-5 py-2 group-hover:text-white'>
                                Press Kit
                            </div>
                            </Link>
                        </div>

                    </div>
                           
                    </div>
                </div>
            
            </div>
        </div>

        

        </>
    )
}
export default Lockjaw;
