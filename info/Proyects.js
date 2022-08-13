import Wallpaper from "../assets/proyect1.jpg";
import Weather from "../assets/proyect2.jpg";
import Country from "../assets/proyect3.jpg";
import Github from "../assets/proyect4.jpg";
import Movie from '../assets/movie_mac.png'
import Manga from '../assets/manga_store.png'
//images

import JavascriptIcon from '../assets/icons8-javascript.svg'
import Figma from "../assets/icons8-figma.svg";
import Git from "../assets/icons8-git.svg";
import GithubIcon from "../assets/icons8-github.svg";
import Html from "../assets/icons8-html-5.svg";
import Css from "../assets/icons8-css3.svg";
import Python from "../assets/icons8-python.svg";
import Nextjs from "../assets/nextjs.svg";
import Node from "../assets/icons8-nodejs.svg";
import Npm from "../assets/icons8-npm.svg";
import Typescript from "../assets/icons8-typescript.svg";
import ReactIcon from "../assets/icons8-react-native.svg";
const Proyects = [
  {
    name: "Wallpaper Gen",
    repo: "https://github.com/JorgeDevJ/wallpaper-gen",
    page: "https://wallpaper-pro.netlify.app/",
    imagesrc: "https://res.cloudinary.com/dxp8a4fhe/image/upload/v1660360710/projects_portafolio/proyect1_g1tvwz.webp",
  },
  {
    name: "WORKMOD",
    repo: "https://www.behance.net/gallery/148840335/WORKMOD",
    page: "https://www.behance.net/gallery/148840335/WORKMOD",
    imagesrc: "https://res.cloudinary.com/dxp8a4fhe/image/upload/v1660360315/Dribbble_Shot_i2oucz.webp",
  },
  {
    name: "Movie Cube",
    repo: "https://github.com/JorgeDevJ/country-search",
    page: "https://movie-cube.netlify.app/",
    imagesrc: "https://res.cloudinary.com/dxp8a4fhe/image/upload/v1660360714/projects_portafolio/movie_mac_gcafkl.webp",
  },
  {
    name: "Manga Store",
    repo: "https://dribbble.com/shots/18848709-Manga-Store-Application",
    page: "https://dribbble.com/shots/18848709-Manga-Store-Application",
    imagesrc: "https://res.cloudinary.com/dxp8a4fhe/image/upload/v1660360715/projects_portafolio/manga_store_y6spwb.webp",
  },
  {
    name: "Weather App",
    repo: "https://github.com/JorgeDevJ/Weather-app",
    page: "https://weatherapp-pro.netlify.app/",
    imagesrc: "https://res.cloudinary.com/dxp8a4fhe/image/upload/v1660360709/projects_portafolio/proyect2_jwh6lf.webp",
  },
  {
    name: "Github Search Users",
    repo: "https://github.com/JorgeDevJ/Github-search-users",
    page: "https://github-search-user-omega.vercel.app/",
    imagesrc: "https://res.cloudinary.com/dxp8a4fhe/image/upload/v1660360708/projects_portafolio/proyect4_atii37.webp",
  },
  {
    name: "Country Search",
    repo: "https://github.com/JorgeDevJ/country-search",
    page: "https://countryrest.netlify.app/",
    imagesrc: "https://res.cloudinary.com/dxp8a4fhe/image/upload/v1660360708/projects_portafolio/proyect3_kkctw9.webp",
  },
];
const values = [
  "Frontend Developer",
  "Designer",
  "Student",
  "Latin",
  "JavaScript Developer",
  "Web Frontend Design",
];
const skillsData = [
  { image: Html, key: 1, title: "Html5", Value: "Advanced" },
  { image: Css, key: 2, title: "Css3", Value: "Advanced" },
  { image: JavascriptIcon, key: 3, title: "JavaScript", Value: "Intermediate" },
  { image: Typescript, key: 4, title: "Typescript", Value: "Basic" },
  { image: Python, key: 5, title: "Python", Value: "Intermediate" },
  { image: ReactIcon, key: 6, title: "ReactJS", Value: "Advanced" },
  { image: Nextjs, key: 7, title: "NextJS", Value: "Advanced" },
  { image: Node, key: 8, title: "NodeJs", Value: "Basic" },
  { image: Npm, key: 9, title: "NPM", Value: "Intermediate" },
  { image: Git, key: 10, title: "Git", Value: "Elementary" },
  { image: GithubIcon, key: 11, title: "Github", Value: "Intermediate" },
  { image: Figma, key: 12, title: "Figma", Value: "Basic" },
];
export { Proyects, values, skillsData };
