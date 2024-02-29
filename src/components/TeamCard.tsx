import Image from "next/image";


export default function TeamCard(props) {
    return (
        <> 
        <div>
            <div>
                <Image className="" src={props.img} alt={props.imgalt}/>
            </div>
            <div>
                <div>
                    <p>{props.name}</p>
                    <p>{props.title}</p>
                </div>
                <div>
                    <div>
                        icon map
                    </div>
                    <div>
                        game map
                    </div>
                </div>
            </div>
        </div>
  
        </>
    );
  }