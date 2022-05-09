import Wallpaper from "../public/proyect1.jpg";
import Weather from "../public/proyect2.jpg";
import Country from "../public/proyect3.jpg";
import Github from "../public/proyect4.jpg";
//images
import JavascriptIcon from "../public/icons8-javascript.svg";
import Figma from "../public/icons8-figma.svg";
import Git from "../public/icons8-git.svg";
import GithubIcon from "../public/icons8-github.svg";
import Html from "../public/icons8-html-5.svg";
import Css from "../public/icons8-css3.svg";
import Python from "../public/icons8-python.svg";
import Nextjs from "../public/nextjs.svg";
import Node from "../public/icons8-nodejs.svg";
import Npm from "../public/icons8-npm.svg";
import Typescript from "../public/icons8-typescript.svg";
import ReactIcon from "../public/icons8-react-native.svg";
const Proyects = [
  {
    name: "Wallpaper Gen",
    repo: "https://github.com/JorgeDevJ/wallpaper-gen",
    page: "https://wallpaper-pro.netlify.app/",
    imagesrc: Wallpaper,
  },
  {
    name: "Weather App",
    repo: "https://github.com/JorgeDevJ/Weather-app",
    page: "https://clouds-app.vercel.app/",
    imagesrc: Weather,
  },
  {
    name: "Github Search Users",
    repo: "https://github.com/JorgeDevJ/Github-search-users",
    page: "https://github-search-user-omega.vercel.app/",
    imagesrc: Github,
  },
  {
    name: "Country Search",
    repo: "https://github.com/JorgeDevJ/country-search",
    page: "https://country-search-pro.vercel.app/",
    imagesrc: Country,
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
