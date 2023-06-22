import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import {AiFillLinkedin} from 'react-icons/ai';


function App() {
  return (
  <> 
  <Navbar />
    <div className=" bg-mTan h-full w-full top-40 py-20 px-2">
        <div id="about" className="text-mPink bg-grimace rounded-lg text-2xl md:text-5xl py-10 px-4 items-center text-center">
          <h1 className="font-bold center text-6xl md:text-8xl">ABOUT</h1>
          <p className="py-5">Abducted Monkeys is a small team of students developing our indie action game Trouble in Tornado Town. We strive to develop compact, enjoyable experiences for players of all skill levels.</p>
          <p className="py-5">All of our developers are currently studying Game Design and Production at Drexel University. Trouble in Tornado Town was developed during the 3rd year of our studies and we owe a great deal of gratitude to our professors at Drexel's Entrepreneurial Game Studio for their advice and industry know-how.</p>
          <div className="">
            <div className="py-2  justify-center">
                <h2 className="py-2 font-bold">Abducted Monkeys is:</h2>
                <p className="py-2">Spencer Cohen</p>
                <p className="py-2">Joshua Pelkington</p>
                <p className="py-2">Tom Giagtzoglou</p>
                <p className="py-2">Joi Saito</p>
                <p className="py-2">Dan Guadalupe</p>
                <p className="py-2">Brian Glogower</p>
                <p className="py-2">Jordan Gerhardt</p>
                <p className="py-2">Matt Miholics</p>
                <p className="py-2">Alex Jasmin</p>
            </div>

            <div className="py-5">
                <h2 className="py-2 font-bold ">Mentored by:</h2>
                <p className="py-2">Tony Rowe</p>
                <p className="py-2">Frank Lee</p>
            </div>
          </div>
        </div>
        <div className='py-3'></div>
        <div id="TiTT"className="text-mPink bg-grimace rounded-lg text-2xl md:text-5xl py-10 px-4 text-center">
          <h1 id="about" className="font-bold text-5xl md:text-8xl">TROUBLE IN TORNADO TOWN</h1>
          <h2 className="py-5 font-bold">Release Trailer:</h2>
          <iframe className='container mx-auto grow w-11/12 aspect-video self-center md:min-w-max' src="https://www.youtube.com/embed/yYihLYcPJls" title="Trouble in Tornado Town  - Release Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
          <div className='py-5 block'><iframe className="h-48 overflow-hidden container mx-auto" src="https://store.steampowered.com/widget/2180060/" /></div>
          <div className="">
            <div className="py-2 justify-center">
            <p className="py-5">Welcome to Tornado Town, a place so lovely you'll be blown away! Trouble in Tornado town is a physics-driven cartoon destruction game where you grow into the most powerful tornado ever seen!</p>
            </div>
            <div className="py-5">
            <p>Play as a tornado and try to destroy as much of of the landscape as possible, as quickly as possible!</p>
            </div>
          </div>
        </div>
        <div className='py-3'></div>
        <div id="contact"className="text-mPink bg-grimace rounded-lg text-2xl md:text-5xl py-10 px-4 items-center text-center">
          <h1 id="about" className="font-bold text-5xl md:text-8xl">CONTACT US</h1>
          <h2 className="py-5 font-bold">You can contact us via Email or on Linkedin</h2>
          <div className="items-center">
            <p className="py-5 text-lg md:text-3xl">contact[at]abductedmonkeys.com</p>
            <AiFillLinkedin className=' mx-auto text-5xl'/>
          </div>
        </div>
    </div>
    <Footer />
  </>
);
}

export default App;
