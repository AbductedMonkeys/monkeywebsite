
import {AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import threeMonkeys from "/public/threemonkeys.jpg"
import {TeamPeople} from "../../components/TeamMembers";
import TeamCard from '@/components/TeamCard';

export default function About() {
  return (
    <> 
        <div  className="text-mPink bg-grimace rounded-lg text-lg md:text-3xl py-10 px-4 text-center items-center flex flex-col">
          <div className='mt-20 bg-grimace rounded-md w-1/2 h-fit'>
            <h1 className="py-5 font-bold text-center text-3xl md:text-8xl">Team</h1>
          </div>
          <div className='w-full md:w-1/2'>
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
                <div className="py-5">
                      <h2 className="py-2 text-center font-bold">Mentored by:</h2>
                      <div className='inline-flex'>
                      <p className="my-5 flex md:px-4 text-mLink">Tony Rowe</p>
                      <p className="my-5 flex md:px-4 text-mLink">Frank Lee</p>
                      </div> 
                  </div>
            </div>  
           </div>
          </div>
        </div>
    </>
  );
}
