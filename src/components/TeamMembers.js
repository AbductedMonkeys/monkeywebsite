import alexImg from "../../public/teampictures"
import brianGImg from "../../public/teampictures"
import brianSImg from "../../public/teampictures"
import danImg from "../../public/teampictures"
import johnImg from "../../public/teampictures"
import joiImg from "../../public/teampictures"
import jordanImg from "../../public/teampictures"
import joshImg from "../../public/teampictures"
import khoaImg from "../../public/teampictures"
import kyleImg from "../../public/teampictures"
import mattImg from "../../public/teampictures"
import myaImg from "../../public/teampictures"
import nickImg from "../../public/teampictures"
import oliverImg from "../../public/teampictures"
import rickyImg from "../../public/teampictures"
import shainaImg from "../../public/teampictures"
import spencerImg from "../../public/teampictures"
import tomImg from "../../public/teampictures"
import xuImg from "../../public/teampictures"
export const TeamPeople = [
    { 
    id:'1', //need these numbers
    name: 'Spencer Cohen',
    img: spencerImg,
    imgalt:"Spencer Cohen headshot", //next images require this just do "{Person} Image"
    title: "Producer",
    links:[{
        personal:"https://spencercohen.page",
        linkedin:"https://www.linkedin.com/in/spenceradamcohen",
        git:"https://github.com/spenceman1", //DELETE LATER POOKIE
        artstation:"https://www.artstation.com/spenc3", //DELETE LATER POOKIE
        twitter: "https://twitter.com/Spenc3_",
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
