import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaLinkedin, FaGithub, FaArtstation, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const renderTeamLinks = (links) => {

    return Object.keys(links).map((link, index) => {
      switch (link) {
        case 'personal':
          return links[link] ? (
            <Link href={links[link]}>
                <FaGlobe key={`${link}-${index}`} className='text-xl m-2 md:text-2xl' />
            </Link>) : null;
        case 'linkedin':
            return links[link] ? (
                <Link href={links[link]}>
                    <FaLinkedin key={`${link}-${index}`} className='text-xl m-2 md:text-2xl' />
                </Link>) : null;
        case 'git':
            return links[link] ? (
                <Link href={links[link]}>
                    <FaGithub key={`${link}-${index}`} className='text-xl m-2 md:text-2xl' />
                </Link>) : null;
        case 'artstation':
            return links[link] ? (
                <Link href={links[link]}>
                    <FaArtstation key={`${link}-${index}`} className='text-xl m-2 md:text-2xl' />
                </Link>) : null;
        case 'twitter':
            return links[link] ? (
                <Link href={links[link]}>
                    <FaSquareXTwitter key={`${link}-${index}`} className='text-xl m-2 md:text-2xl' />
                </Link>) : null;
        default:
          return null;
      }
    });
  };

 const TeamCard = ({person}) => {
    return (
        <> 
        <div className="w-full h-auto rounded-md shadow-md ">
            <div className="bg-grimace m-6 p-2 flex flex-wrap justify-left rounded-md outline-4 outline md:outline-8 outline-mTan">
            <div className="w-6/12 sm:w-4/12 p-4">
                <Image className="shadow rounded-full max-w-full h-auto align-middle border-none" src={person.img} alt={person.imgalt}/>
            </div>
            <div className="flex flex-col p-4 w-2/3">
                <div className="text-left justify-center flex flex-col h-4/6">
                    <h1 className="font-bold text-3xl w-max">{person?.name}</h1>
                    <h2 className="font-bold text-xl w-max">{person?.title}</h2>
                </div>
                <div className="flex flex-row w-full h-2/6">
                    <div className="flex justify-start">
                        {renderTeamLinks(person.links[0])}
                    </div>
                    <div className="flex justify-end">
                       
                    </div>
                </div>
            </div>
        </div>
        </div>
        
  
        </>
    );
  }
  export default TeamCard;