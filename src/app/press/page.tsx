import {AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import Link from 'next/link';
import lockjawThum from '/public/lockjaw/lockjawopengraphthumbnail.png'
import tornadoThum from '/public/tornadotown/tornadotownopengraphthumbnail.png'

export default function Press() {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="text-mPink bg-grimace justify-center pt-10 items-center flex flex-col flex-grow">
          <div className="lg:border-mPink lg:border-b-2 w-full lg:w-3/4">
            <h1 className="font-bold text-center text-5xl lg:text-8xl mt-20 md:my-10">PRESS</h1>
          </div>
          <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0 flex justify-center">
              <div className="w-full max-w-xs md:max-w-lg px-6 py-10 rounded-xl">
                <p className="text-lg md:text-3xl text-center mb-6">Want to cover our games? Check out our press kits for media and info, or send us an email.</p>
                <a href="mailto:contact@abductedmonkeys.com" target="_blank" rel="noopener noreferrer" className="block w-fit mx-auto outline outline-mPink outline-2 hover:bg-mPink hover:text-mTan font-bold text-center py-3 px-6 rounded-lg transition duration-300">Email Us!</a>
              </div>
            </div>
          <div className="w-full lg:w-3/4 my-10 justify-center flex flex-wrap">
            <a href="https://drive.google.com/drive/folders/1U8Fh48_GMZZqPVF2Gwe3rIJsbEdI00e8?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2 lg:w-1/3 px-6  flex justify-center">
                <div className="max-w-xs md:max-w-md px-6 py-10 rounded-xl text-center hover:text-mTan hover:bg-mPink hover:shadow-black hover:duration-200">
                  <Image alt="Abducted Monkeys Team" src={lockjawThum} className="rounded-2xl mx-auto mb-3" />
                  <p className="text-lg underline md:text-3xl">Lockjaw: Robo-Royale!</p>
                </div>
            </a>
            <a href="https://drive.google.com/drive/folders/1XhlMzCkKwPJj6o7G-fsYHHS5hxFtRAZt?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2 lg:w-1/3 px-6  flex justify-center">
              <div className="max-w-xs md:max-w-md px-6 py-10 rounded-xl text-center hover:text-mTan hover:bg-mPink hover:shadow-black hover:duration-200">
                <Image alt="Abducted Monkeys Team" src={tornadoThum} className="rounded-2xl mx-auto mb-3" />
                <p className="text-lg underline  md:text-3xl">Trouble in Tornado Town</p>
                </div>
            </a>
          </div>
        </div>
      </div>
    );
  }