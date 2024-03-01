import React from 'react';
import lockjawLogo from '/public/lockjawLogo.jpg';
import lockjawHero from '../../../public/lockjaw/library_hero.png'
import lockjawLogoTrans from '../../../public/lockjaw/library_logo_transparent.png'
import Image from 'next/image';
import type { Metadata } from "next";

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
        <div className="bg-lGray text-white h-screen w-full ">
            <div className='bg-cover bg-fixed bg-center w-full top-0'>
            <Image 
                alt="Lockjaw Logo" 
                src={lockjawHero} 
                className=" "
                />
            </div>
            
            <div className='h-screen w-full pb-6 px-6 text-lg md:text-3xl top-20 py-10 items-center text-center'>
                <h1 className="font-bold text-center text-3xl md:text-8xl">Lockjaw</h1>
                    
                <p className="py-5 px-5 text-left">Welcome to Lockjaw, where its every robot for themselves in the tournament of the century!</p>
                <p className="py-5 px-5 text-left">Grab parts laying around and knock them off others! Starting off with just your robotic core, scavenge parts to ensure your robot’s survival. With four slots on every robot, mix and match parts—each engagement is sure to grind some gears. Pack some heat with the dodgeball launcher to send robots flying, or deliver a powered-up punch with The Tenderizer!</p>
                <p className="py-5 px-5 text-left">Every gadget can make an impact in the dynamic battles of Lockjaw. Gear up and join the robotic rumble today!</p>
            </div>
            

        </div>
            
        

        </>
    )
}
export default Lockjaw;
