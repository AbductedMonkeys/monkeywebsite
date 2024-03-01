import React from 'react';
import lockjawLogo from '/public/lockjawLogo.jpg';
import Image from 'next/image';

const Lockjaw = () => {
    return (
        <>
            <div id="lockjaw" className="bg-lOrange h-full w-full top-40 pt-20 pb-6 px-6">
                <div className="text-white bg-lGray rounded-lg text-lg md:text-3xl py-10 px-4 text-center items-center">
                    <h1 className="font-bold text-center text-3xl md:text-8xl">Lockjaw</h1>
                    <Image 
                    alt="Lockjaw Logo" 
                    src={lockjawLogo} 
                    
                    className="py-4 inline-flex justify-center"
                    />
                    <p className="py-5 px-5 text-left">Welcome to Lockjaw, where its every robot for themselves in the tournament of the century!</p>
                    <p className="py-5 px-5 text-left">Grab parts laying around and knock them off others! Starting off with just your robotic core, scavenge parts to ensure your robot’s survival. With four slots on every robot, mix and match parts—each engagement is sure to grind some gears. Pack some heat with the dodgeball launcher to send robots flying, or deliver a powered-up punch with The Tenderizer!</p>
                    <p className="py-5 px-5 text-left">Every gadget can make an impact in the dynamic battles of Lockjaw. Gear up and join the robotic rumble today!</p>
                </div>
            </div>
        </>
    )
}
export default Lockjaw;
