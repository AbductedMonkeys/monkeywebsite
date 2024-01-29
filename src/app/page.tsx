
import {AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import threeMonkeys from "/public/threemonkeys.jpg"
import CustSwiper from '@/components/CustSwiper';



export default function Home() {
 
  return (
    <> 
    
      <div id="TiTT" className=" bg-mTan h-full w-full top-40 pt-20 pb-6 px-6">
      <div className="text-mPink bg-grimace rounded-lg text-lg md:text-3xl py-16 px-4">
        <CustSwiper></CustSwiper>
            <h1 className="font-bold text-center text-3xl md:text-8xl">TROUBLE IN TORNADO TOWN</h1>
        
            <h2 className="py-5  text-center font-bold">Release Trailer:</h2>
            <iframe className='container mx-auto grow w-11/12 aspect-video self-center md:min-w-max' src="https://www.youtube.com/embed/yYihLYcPJls" title="Trouble in Tornado Town  - Release Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
            <div className='py-5 block'><iframe className="h-48 overflow-hidden container mx-auto" src="https://store.steampowered.com/widget/2180060/" /></div>
            <div className="">
              <div className="py-2 justify-center">
              <p className="py-5 px-5 ">Welcome to Tornado Town, a place so lovely youll be blown away! Trouble in Tornado town is a physics-driven cartoon destruction game where you grow into the most powerful tornado ever seen!</p>
              </div>
              <div className="py-5 px-5">
              <p>Play as a tornado and try to destroy as much of of the landscape as possible, as quickly as possible!</p>
              </div>
            </div>
            <div id="about" ></div>
          </div>
          <div ></div>
          <div  className="text-mPink bg-grimace rounded-lg text-lg md:text-3xl py-10 px-4 text-center items-center">
            <h1 className="font-bold text-center text-3xl md:text-8xl">ABOUT</h1>
            <Image alt="Abducted Monkeys Team" src ={threeMonkeys} className="py-4 inline-flex justify-center"/>
            <p className="py-5 px-5 text-left">Abducted Monkeys is a small team of students developing our indie action game Trouble in Tornado Town. We strive to develop compact, enjoyable experiences for players of all skill levels.</p>
            <p className="py-5 px-5 text-left">All of our developers are currently studying Game Design and Production at Drexel University. Trouble in Tornado Town was developed during the 3rd year of our studies and we owe a great deal of gratitude to our professors at Drexels Entrepreneurial Game Studio for their advice and industry know-how.</p>
            <div className="items-center my-3">
              <div className="py-2">
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
            <div id="contact" ></div>
          </div>
          <div></div>
          <div className="text-mPink bg-grimace rounded-lg text-2xl md:text-5xl py-10 px-4 items-center text-center">
            <h1 className="font-bold text-3xl md:text-8xl">CONTACT US</h1>
            <h2 className="py-5 font-bold">You can contact us via Email or on Linkedin</h2>
            <div className="items-center flex flex-col md:flex-row md:inline-flex">
              <p className="py-5 px-5 text-base md:text-2xl">contact[at]abductedmonkeys.com</p>
              <a href='https://www.linkedin.com/company/abductedmonkeys/' className='py-5 px-5'>
                <AiFillLinkedin className='text-5xl hover:text-mTan'/>
              </a>
            </div>
          </div>
      </div>

    </>
  );
}
