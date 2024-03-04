import alexImg from "../../public/teampictures/alexImg.png"
import brianGImg from "../../public/teampictures/brianGImg.png"
import brianSImg from "../../public/teampictures/brianSImg.png"
import danImg from "../../public/teampictures/danImg.jpg"
import johnImg from "../../public/teampictures/johnImg.png"
import joiImg from "../../public/teampictures/joiImg.png"
import jordanImg from "../../public/teampictures/jordanImg.jpg"
import joshImg from "../../public/teampictures/joshImg.jpg"
import khoaImg from "../../public/teampictures/khoaImg.png"
import kyleImg from "../../public/teampictures/kyleImg.png"
import mattImg from "../../public/teampictures/mattImg.jpg"
import myaImg from "../../public/teampictures/myaImg.png"
import nickImg from "../../public/teampictures/nickImg.png"
import oliverImg from "../../public/teampictures/oliverImg.png"
import rickyImg from "../../public/teampictures/rickyImg.jpg"
import shainaImg from "../../public/teampictures/shainaImg.png"
import spencerImg from "../../public/teampictures/spencerImg.png"
import tomImg from "../../public/teampictures/tomImg.png"
import xuImg from "../../public/teampictures/xuImg.png"
export const TeamPeople = [
    { 
        id:'1', //need these numbers
        name: 'Spencer Cohen',
        img: spencerImg,
        imgalt:"Spencer Cohen image", //next images require this just do "{Person} Image"
        title: "Producer",
        links:[{
            personal:"https://spencercohen.page",
            linkedin:"https://www.linkedin.com/in/spenceradamcohen",
            twitter: "https://twitter.com/Spenc3_",
        }],
        games:[{
            tornado: true,
            lockjaw: true,
        }]
    },
    { 
        id:'2',
        name: 'Matt Miholics',
        img: mattImg,
        imgalt:"Matt Miholics bathroom-shot image",
        title: "Programming Director",
        links:[{
            git: "https://github.com/mattmiholics",
            linkedin:"https://www.linkedin.com/in/matt-miholics/",
        }],
        games:[{
            tornado: true,
            lockjaw: true,
        }]
    },
    { 
        id:'3',
        name: 'Alex Jasmin',
        img: alexImg,
        imgalt:"Alex Jasmin image",
        title: "Art Director",
        links:[{
            artstation:"https://alexgjasmin.artstation.com/",
            linkedin:"https://www.linkedin.com/in/alexgjasmin/",
        }],
        games:[{
            tornado: true,
            lockjaw: true,
        }]
    },
    { 
        id:'4',
        name: 'Joshua Pelkington',
        img: joshImg,
        imgalt:"Joshua Pelkington image",
        title: "Gameplay Programmer",
        links:[{
            personal:"https://joshuapelican.github.io/",
            linkedin:"https://www.linkedin.com/in/spenceradamcohen",
            twitter: "https://twitter.com/Spenc3_",
        }],
        games:[{
            tornado: true,
            lockjaw: false,
        }]
    },
    { 
        id:'5',
        name: 'Joi Saito',
        img: joiImg,
        imgalt:"Joi Saito image",
        title: "3D Artist / Level Artist",
        links:[{
            artstation: "https://www.artstation.com/joyful2051",
            linkedin:"https://www.linkedin.com/in/joi-saito/",
            personal:"https://3dgraveyard.com/",
        }],
        games:[{
            tornado: true,
            lockjaw: true,
        }]
    },
    { 
        id:'6',
        name: 'Tom Giagtzoglou',
        img: tomImg,
        imgalt:"Tom Giagtzoglou image",
        title: "UI Programmer / Tech Artist",
        links:[{
            personal: "https://tomgia.com/",
            git: "https://github.com/tomgiagtz",
            artstation: "https://www.artstation.com/tomgia",
            linkedin:"https://www.linkedin.com/in/tomgia/",
        }],
        games:[{
            tornado: true,
            lockjaw: false,
        }]
    },
    { 
        id:'7',
        name: 'Dan Guadalupe',
        img: danImg,
        imgalt:"Dan Guadalupe image",
        title: "Level Designer",
        links:[{
            artstation: "https://danguad.artstation.com/projects",
            linkedin:"https://www.linkedin.com/in/danielguadalupe/",
        }],
        games:[{
            tornado: true,
            lockjaw: false,
        }]
    },
    { 
        id:'8',
        name: 'Brian Glogower',
        img: brianGImg,
        imgalt:"Brian Glogower image",
        title: "Level Designer / Marketer",
        links:[{
            personal: "https://brianglogower.wordpress.com/",
            linkedin:"https://www.linkedin.com/in/brian-glogower/",
        }],
        games:[{
            tornado: true,
            lockjaw: true,
        }]
    },
    { 
        id:'9',
        name: 'Jordan Gerhardt',
        img: jordanImg,
        imgalt:"Jordan Gerhardt image",
        title: "Tech Artist / 3D Artist",
        links:[{
            artstation: "https://www.artstation.com/jgerhardt",
            linkedin:"https://www.linkedin.com/in/jordanalangerhardt/",
        }],
        games:[{
            tornado: true,
            lockjaw: true,
        }]
    },
    { 
        id:'10',
        name: 'Mya Timmermann',
        img: myaImg,
        imgalt:"Mya Timmermann image",
        title: "Sound Designer / UI Artist",
        links:[{
            personal: "https://myaflac.bandcamp.com/",
            artstation: "https://www.artstation.com/btimmermann",
            linkedin:"https://www.linkedin.com/in/mya-timmermann/",
        }],
        games:[{
            tornado: false,
            lockjaw: true,
        }]
    },
    { 
        id:'11',
        name: 'Shaina Lee',
        img: shainaImg,
        imgalt:"Shaina Lee image",
        title: "Sound Designer / UI Artist",
        links:[{
            artstation: "https://www.artstation.com/tayowna",
            linkedin:"https://www.linkedin.com/in/tayowna",
            twitter: "https://www.twitter.com/tayowna",
        }],
        games:[{
            tornado: false,
            lockjaw: true,
        }]
    },
    { 
        id:'12',
        name: 'Oliver Deinzer',
        img: oliverImg,
        imgalt:"Oliver Deinzer image",
        title: "Programmer",
        links:[{
            git: "https://github.com/olli1616",
            artstation: "https://www.artstation.com/oliverdeinzer",
            linkedin:"https://www.linkedin.com/in/oliver-deinzer/",
        }],
        games:[{
            tornado: false,
            lockjaw: true,
        }]
    },
    { 
        id:'13',
        name: 'Khoa Hoang',
        img: khoaImg,
        imgalt:"Khoa Hoang image",
        title: "Gameplay Programmer",
        links:[{
            git: "https://github.com/kowoa",
            linkedin:"https://www.linkedin.com/in/kdhoang/",
        }],
        games:[{
            tornado: false,
            lockjaw: true,
        }]
    },
    { 
        id:'14',
        name: 'Ricky Chen',
        img: rickyImg,
        imgalt:"Ricky Chen image",
        title: "Programmer",
        links:[{
            git: "https://github.com/RickyChen67",
            linkedin:"https://www.linkedin.com/in/ricky-chen-a6930120a/",
        }],
        games:[{
            tornado: false,
            lockjaw: true,
        }]
    },
    { 
        id:'15',
        name: 'John Eberly',
        img: johnImg,
        imgalt:"John Eberly image",
        title: "Gameplay Programmer",
        links:[{
            git: "https://github.com/Jjman739",
        }],
        games:[{
            tornado: false,
            lockjaw: true,
        }]
    },
    { 
        id:'16',
        name: 'Xu Chen',
        img: xuImg,
        imgalt:"Xu Chen image",
        title: "Programmer",
        links:[{
            linkedin: "https://www.linkedin.com/in/xu-chen-compsci/"
        }],
        games:[{
            tornado: false,
            lockjaw: true,
        }]
    },
    { 
        id:'17',
        name: 'Nick Pohwat',
        img: nickImg,
        imgalt:"Nick Pohwat image",
        title: "Programmer",
        links:[{
            linkedin: "https://www.linkedin.com/in/nick-pohwat/"
        }],
        games:[{
            tornado: false,
            lockjaw: true,
        }]
    },
    { 
        id:'18',
        name: 'Kyle Salzman',
        img: kyleImg,
        imgalt:"Kyle Salzman image",
        title: "Programmer",
        links:[{
            linkedin: "https://www.linkedin.com/in/kylesalzman/"
        }],
        games:[{
            tornado: false,
            lockjaw: true,
        }]
    },
        { 
        id:'19',
        name: 'Brian Sanyshyn',
        img: brianSImg,
        imgalt:"Brian Sanyshyn image",
        title: "Soundtrack Artist",
        links:[{
            personal: "https://briansanyshynmusic.com/",
            linkedin: "https://www.linkedin.com/in/brian-sanyshyn-bns619/"
        }],
        games:[{
            tornado: false,
            lockjaw: true,
        }]
    },
]
