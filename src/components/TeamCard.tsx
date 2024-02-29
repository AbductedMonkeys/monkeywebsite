import Image from "next/image";


 const TeamCard = ({person}) => {
    return (
        <> 
        <div className="w-1/2 h-auto">
            <div className="bg-grimace m-10 p-2 flex flex-wrap justify-left">
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
                        icon map
                    </div>
                    <div className="flex justify-end">
                        game map
                    </div>
                </div>
            </div>
        </div>
        </div>
        
  
        </>
    );
  }
  export default TeamCard;