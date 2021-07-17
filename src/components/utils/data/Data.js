import { AiFillHome, AiFillCode } from 'react-icons/ai'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaUserAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export const jobsData = [
    {
        name: "Prosperi",
        languages: ["JS", "REACT", "TS"],
        startAt: "Fev/21",
        role: "Frontend",
        level: "Jr."
    },
    {
        name: "Grupfy",
        languages: ["JS", "REACT", "NODE"],
        startAt: "Fev/21",
        endAt: "Jul/21",
        role: "FullStack",
        level: "Jr."
    },
    {
        name: "FoxMS",
        languages: ["JS", "REACT"],
        startAt: "Nov/20",
        endAt: "Dez/20",
        role: "Frontend",
        level: "Freelancer"
    }
]

export const aboutData = [
    {
        img: "https://picsum.photos/500/500?grayscale",
        name: "Julio",
        lasName: "Memelli",
        description: "Meu nome é Julio Memeli, tenho 23 anos e estudo engenharia da computaçao na UFES. Comecei a programar muito cedo, com 11 anos, quando eu frequentava um fórum chamado RageZone. Lá tive o meu primeiro contato com um projeto open source, em JAVA. O projeto era um servidor de um jogo MMORPG. Depois de um tempo migrei para o desenvolvimento web, e comecei a aprender PHP, desisti, e fui para o JavaScript. Atualmente trabalho com a MERN stack (Mongo, Express, React e Node).",
        experiences: [
            {
                name: "JavaScript",
                time: "4 anos"
            },
            {
                name: "Node",
                time: "2 anos"
            },
            {
                name: "React",
                time: "2 anos"
            },
            {
                name: "MongoDB",
                time: "1 ano e meio"
            },
            {
                name: "MySQL",
                time: "4 anos"
            },
            {
                name: "UI/UX",
                time: "1 ano"
            },
        ]
    }
]

export const navData = [
    {
        to: "/",
        page: "Home",
        icon: <AiFillHome />,
        disabled: false,
    },
    {
        to: "/sobre",
        page: "Sobre",
        icon: <FaUserAlt />,
        disabled: false,
    },
    {
        to: "/repos",
        page: "Repositórios",
        icon: <RiGitRepositoryFill />,
        disabled: false,
    },
    {
        to: "",
        page: "Side Projects",
        icon: <AiFillCode />,
        disabled: true,
    },
    {
        to: "/contato",
        page: "Contato",
        icon: <MdEmail />,
        disabled: true,
    }
]

export const aboutPageData = {
    user: {
        img: "https://picsum.photos/500/500?grayscale",
        name: "Julio",
        lastName: "Memelli",
        description: "Meu nome é Julio Memeli, tenho 23 anos e estudo engenharia da computaçao na UFES. Comecei a programar muito cedo, com 11 anos, quando eu frequentava um fórum chamado RageZone. Lá tive o meu primeiro contato com um projeto open source, em JAVA. O projeto era um servidor de um jogo MMORPG. Depois de um tempo migrei para o desenvolvimento web, e comecei a aprender PHP, desisti, e fui para o JavaScript. Atualmente trabalho com a MERN stack (Mongo, Express, React e Node).",
    },
    experiences: [
        {
            name: "React",
            initAt: "Dez/19",
            endAt: "Jan/20",
            seniority: "Jr.",
            experienceTime: "2 anos",
            prominence: ["Udemy", "doc"]
        },
        {
            name: "Node",
            initAt: "Ago/19",
            endAt: "Dez/19",
            seniority: "Jr.",
            experienceTime: "2 anos",
            prominence: ["Udemy", "doc"]
        },
    ],
    socialMedia: [
        {
            name: "LinkedIn",
            to: "/sadasd",
            icon: <FaLinkedin />
        },
        {
            name: "Github",
            to: "/",
            icon: <FaGithub />
        },
        {
            name: "Instagram",
            to: "/",
            icon: <FaInstagram />
        },
        {
            name: "Twitter",
            to: "/",
            icon: <FaTwitter />
        },
    ]
}
