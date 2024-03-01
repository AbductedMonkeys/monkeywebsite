import React from 'react';
import lockjawLogo from '/public/lockjawLogo.jpg';
import lockjawHero from '../../../public/lockjaw/library_hero.png'
import lockjawLogoTrans from '../../../public/lockjaw/library_logo_transparent.png'
import Image from 'next/image';

const Lockjaw = () => {
    return (
        <>
        <div className="bg-lGray text-white h-full w-full top-40 pt-20 pb-6 px-6 text-lg md:text-3xl py-10  text-center items-center">

            <Image 
                alt="Lockjaw Logo" 
                src={lockjawHero} 
                className="py-4 bg-fixed max-h-96 object-cover w-full top-40 pt-20 pb-6 px-6"
                />

            <h1 className="font-bold text-center text-3xl md:text-8xl">Lockjaw</h1>
                    
            <p className="py-5 px-5 text-left">Welcome to Lockjaw, where its every robot for themselves in the tournament of the century!</p>
            <p className="py-5 px-5 text-left">Grab parts laying around and knock them off others! Starting off with just your robotic core, scavenge parts to ensure your robot’s survival. With four slots on every robot, mix and match parts—each engagement is sure to grind some gears. Pack some heat with the dodgeball launcher to send robots flying, or deliver a powered-up punch with The Tenderizer!</p>
            <p className="py-5 px-5 text-left">Every gadget can make an impact in the dynamic battles of Lockjaw. Gear up and join the robotic rumble today!</p>

        </div>
            
        

        </>
    )
}
export default Lockjaw;
