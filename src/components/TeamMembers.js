import spenImg from "../../public/AbductedMonkeysLogo-pinkgrimace.png"
export const TeamPeople = [
    { 
    id:'1', //need these numbers
    name: 'Spencer Cohen',
    img: spenImg,
    imgalt:"Spencer Image", //next images require this just do "{Person} Image"
    title: "CEO/Producer",
    links:[{
        personal:"",
        linkedin:"",
        git:"",
        artstation:"",
    }],
    games:[{
        tornado: true,
        lockjaw: true,
    }]
    },
    { 
        //second example for how to format curly braces
        id:'2',
        name: 'Spencer Cohen',
        img: spenImg,
        imgalt:"Spencer Image", //next images require this just do "{Person} Image"
        title: "CEO/Producer",
        links:[{
            personal:"",
            linkedin:"",
            git:"",
            artstation:"",
        }],
        games:[{
            tornado: true,
            lockjaw: true,
        }]
    },
]