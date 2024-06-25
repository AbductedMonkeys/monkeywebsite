
import {AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import threeMonkeys from "/public/threemonkeys.jpg"
import {TeamPeople} from "../../components/TeamMembers";
import TeamCard from '@/components/TeamCard';
import { Metadata } from 'next';
export const metadata: Metadata = {
  metadataBase: new URL('https://www.abductedmonkeys.com'),
  title: "Abducted Monkeys",
  description: "Video game studio developing Trouble in Tornado Town & Lockjaw: Robo-Royale",
  keywords: ['Abuducted', 'Monkeys', 'Abducted Monkeys', 'Abducted Monkeys LLC', 'Tornado', 'Trouble', 'Trouble in Torndo Town', 'Tornado Town', 'Lockjaw', 'Robo-Royale', 'Lockjaw: Robo-Royale'],
  openGraph:{
    type: "website",
    url: "https://www.abductedmonkeys.com",
    title: "Abducted Monkeys",
    description: "Video game studio developing Trouble in Tornado Town & Lockjaw: Robo-Royale",
    siteName: "Abducted Monkeys",
    images: [{
      url: "https://www.abductedmonkeys.com/monkeythin.png",
    }]
  },
  alternates: {
    canonical: '/team',
  }
};
export default function About() {
  return (
    <> 
        <div  className="text-mPink bg-grimace rounded-lg text-lg md:text-3xl md:py-10 px-4 text-center items-center flex flex-col">
          <div className='lg:border-mPink lg:border-b-2 w-full lg:w-3/4 mt-20'>
            <h1 className="py-5 font-bold text-center text-5xl lg:text-8xl">Team</h1>
          </div>
          <div className='w-full md:w-3/4'>
            <div className="items-center my-3">
              <div className="py-2">
                <div className='grid grid-cols-1 xl:grid-cols-2'>
                  {TeamPeople.map((person)=>(
                      <div className='py-5' key={person.id}>
                      <TeamCard person={person}></TeamCard>
                      </div>
                  )
                  )}
                </div>
            </div>  
           </div>
          </div>
        </div>
    </>
  );
}
