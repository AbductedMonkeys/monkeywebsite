import {AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";



export default function TroubleinTornadoTown() {
  return (
    <> 
      <div id="TiTT" className=" bg-mTan h-full w-full top-40 pt-20 pb-6 px-6">
      <div className="text-mPink bg-grimace rounded-lg text-lg md:text-3xl py-16 px-4">
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
        </div>
        </div>

    </>
  );
}
