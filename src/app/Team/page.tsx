
import {AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import threeMonkeys from "/public/threemonkeys.jpg"
import {TeamPeople} from "../../components/TeamMembers";
import TeamCard from '@/components/TeamCard';

export default function About() {
  return (
    <> 
        <div  className="text-mPink bg-mTan rounded-lg text-lg md:text-3xl py-10 px-4 text-center items-center flex flex-col">
          <div>
            <h1 className=" flex font-bold text-center mt-20 text-3xl md:text-8xl">Team</h1>
          </div>
          <div className='w-1/2 flex flex-grid'>
            <div className="items-center my-3">
              <div className="py-2">
              {TeamPeople.map((person)=>(
                <div key={person.id}>
                  <TeamCard person={person}></TeamCard>
                </div>
              )
              )}
              
                  <h2 className="py-2 text-center font-bold">Abducted Monkeys is:</h2>
                  <a href = "https://www.linkedin.com/in/spenceradamcohen/" className="py-5 justify-center md:px-4 flex text-mLink hover:text-mTan underline md:no-underline hover:underline">Spencer Cohen</a>
                  <a href = "http://joshuapelican.github.io/" className="py-5 md:px-4 justify-center flex text-mLink hover:text-mTan underline md:no-underline hover:underline">Joshua Pelkington</a>
                  <a href = "https://tomgia.com/" className="py-5 md:px-4 justify-center flex text-mLink hover:text-mTan underline md:no-underline hover:underline">Tom Giagtzoglou</a>
                  <a href = "https://www.artstation.com/joyful2051" className="py-5 justify-center flex md:px-4 text-mLink hover:text-mTan underline md:no-underline hover:underline">Joi Saito</a>
                  <a href = "https://www.artstation.com/danguad" className="py-5 justify-center flex md:px-4 text-mLink hover:text-mTan underline md:no-underline hover:underline">Dan Guadalupe</a>
                  <a href = "https://www.linkedin.com/in/brian-glogower/" className="py-5 justify-center flex md:px-4 text-mLink hover:text-mTan underline md:no-underline hover:underline">Brian Glogower</a>
                  <a href = "https://www.linkedin.com/in/jordan-gerhardt-91a5141a2/" className="py-5 justify-center flex md:px-4 text-mLink hover:text-mTan underline md:no-underline hover:underline">Jordan Gerhardt</a>
                  <a href = "https://www.artstation.com/miholicsmatt" className="py-5 justify-center flex md:px-4 text-mLink hover:text-mTan underline md:no-underline hover:underline">Matt Miholics</a>
                  <a href = "https://www.artstation.com/alexgjasmin" className="py-5 justify-center flex md:px-4 text-mLink hover:text-mTan underline md:no-underline hover:underline">Alex Jasmin</a>
              </div>

              <div className="py-5">
                  <h2 className="py-2 text-center font-bold ">Mentored by:</h2>
                  <p className="py-5 justify-center flex md:px-4 text-mLink">Tony Rowe</p>
                  <p className="py-5 justify-center flex md:px-4 text-mLink">Frank Lee</p>
              </div>
            </div>
          </div>  
           
            </div>
    </>
  );
}
