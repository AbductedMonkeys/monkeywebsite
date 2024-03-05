import Image from "next/image";
import Link from "next/link";
import tornadoImg from "../../public/gameicons/tornado.png";
import lockjawImg from "../../public/gameicons/lockjaw.png";
import { FaGlobe, FaLinkedin, FaGithub, FaArtstation, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const renderTeamLinks = (links) => {
    return Object.keys(links).map((link, index) => {
      switch (link) {
        case 'personal':
          return links[link] ? (
            <Link href={links[link]} className=" flex h-fit w-auto">
                <FaGlobe key={`${link}-${index}`} className='text-xl lg:text-4xl m-2 ' />
            </Link>) : null;
        case 'linkedin':
            return links[link] ? (
                <Link href={links[link]} className=" flex h-fit w-auto">
                    <FaLinkedin key={`${link}-${index}`} className='text-xl lg:text-4xl m-2 ' />
                </Link>) : null;
        case 'git':
            return links[link] ? (
                <Link href={links[link]} className=" flex h-fit w-auto">
                    <FaGithub key={`${link}-${index}`} className='text-xl lg:text-4xl m-2 ' />
                </Link>) : null;
        case 'artstation':
            return links[link] ? (
                <Link href={links[link]} className=" flex h-fit w-auto">
                    <FaArtstation key={`${link}-${index}`} className='text-xl lg:text-4xl m-2 ' />
                </Link>) : null;
        case 'twitter':
            return links[link] ? (
                <Link href={links[link]} className=" flex h-fit w-auto">
                    <FaSquareXTwitter key={`${link}-${index}`} className='text-xl lg:text-4xl m-2 ' />
                </Link>) : null;
        default:
          return null;
      }
    });
  };

  const renderGameIcons = (games) => {
    return Object.keys(games).map((game, index) => {
      switch (game) {
        case 'tornado':
          return games[game] ? <Image src={tornadoImg} alt={'tornado icon'} key={`${game}-${index}`} className=' flex h-6 lg:h-8 w-auto m-2' /> : null;
        case 'lockjaw':
            return games[game] ? <Image src={lockjawImg} alt={'lockjaw icon'} key={`${game}-${index}`} className='flex h-6 lg:h-8 w-auto m-2' /> : null;
        default:
          return null;
      }
    });
  };

 const TeamCard = ({person}) => {
    return (
        <> 
        <div className="bg-grimace lg:m-6 p-2 flex flex-wrap justify-left h-full rounded-md outline-4 outline md:outline-8 outline-mTan">
            <div className="w-6/12 h-fit sm:w-4/12 p-2 lg:p-4">
                <Image className="shadow rounded-full max-w-full h-auto align-middle border-none" src={person.img} alt={person.imgalt}/>
            </div>
            <div className="flex flex-col p-2 lg:p-4 w-full lg:w-2/3">
                <div className="text-left justify-center flex flex-col h-4/6">
                    <h1 className="font-bold text-xl lg:text-3xl flex flex-shrink w-full">{person?.name}</h1>
                    <h2 className="font-bold text-sm lg:text-xl flex flex-shrink w-full">{person?.title}</h2>
                </div>
                <div className="inline-flex justify-between w-full h-fit">
                    <div className="flex h-fit w-auto">
                        {renderTeamLinks(person.links[0])}
                    </div>
                    <div className="flex h-fit w-auto">
                        {renderGameIcons(person.games[0])}
                    </div>
                </div>
            </div>
        </div>

        
  
        </>
    );
  }
  export default TeamCard;