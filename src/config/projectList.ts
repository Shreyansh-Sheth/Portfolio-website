import { m } from "framer-motion";
import iProjects from "../interfaces/projects";

const projectList: iProjects[] = [
  {
    heading: "Portfolio Website",
    tech: ["Next.js", "Tailwindcss"],
    link: "https://github.com/Shreyansh-Sheth/Portfolio-website",
    status: "Completed",
    subText: "Static Website For My Portfolio",
  },
  {
    heading: "Esports",
    tech: ["firebase", "Next.js", "TypeScript"],
    link: "https://github.com/Shreyansh-Sheth/esports.git",
    subText: "Torunament & Clan Managment Web App",
    status: "Work In Progress",
  },
  {
    heading: "Quizee",
    tech: ["firebase", "Next.Js", "Typescript"],
    link: "https://github.com/Shreyansh-Sheth/quize.git",
    subText: "Online Multiplayer Quiz Game For Project Work At Collage",
    status: "Completed",
  },
  {
    heading: "Article",
    tech: ["Node.js", "Express", "Ejs", "Mongodb"],
    link: "https://github.com/Shreyansh-Sheth/ArticleProject",
    subText: "Article Posting Website",
    status: "Completed",
  },
  {
    heading: "Universal Web Scrapper",
    tech: ["Node.js", "Axios", "Cheerio"],
    link: "https://github.com/Shreyansh-Sheth/Webscrapper",
    subText: "Simple Universal Web Scrapper",
    status: "Completed",
  },
  {
    heading: "Todo",
    tech: ["Recoil", "React"],
    link: "https://github.com/Shreyansh-Sheth/TODO-Recoil",
    subText: "Easy To Use Offline TODO application with react and recoil",
    status: "Completed",
  },
  {
    heading: "React Template",
    tech: ["Node.js", "Parcel", "Babel"],
    link: "https://github.com/Shreyansh-Sheth/React.js-Template",
    subText: "Lightweight Highly Costomizable React Template",
    status: "Completed",
  },
  {
    heading: "Hash.js",
    tech: ["javascript"],
    link: "https://github.com/Shreyansh-Sheth/HashTable.js",
    subText: "Simple Hash Table Library For in-memory Datastore",
    status: "Completed",
  },
];
export default projectList;
