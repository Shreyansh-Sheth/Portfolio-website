import Head from "next/head";
import Link from "next/link";
import FadeInWhenVisible from "../src/components/FadeInAnimation";
import ProjectTab from "../src/components/ProjectTab";
import projectList from "../src/config/projectList";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Typed from "react-typed";
import {
  VscChromeMaximize,
  VscChromeClose,
  VscChromeMinimize,
} from "react-icons/vsc";
import cmdList from "../src/config/cmdList";
import SkillTab from "../src/components/SkillsTab";
import SkillList from "../src/config/SkillList";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Shreyansh Sheth</title>
        <meta
          name="description"
          content="Web Developer , Content Writer"
        ></meta>
        <meta name="author" content="Shreyansh Sheth"></meta>
      </Head>
      <nav className="flex justify-end mx-10 mb-10 pt-10 text-lg">
        <a href="/Resume.pdf" target="_blank">
          <p className="mr-5 underline cursor-pointer sm:text-2xl text-lg">
            Resume
          </p>
        </a>
        <Link href="/blog">
          <p className="underline cursor-pointer sm:text-2xl text-lg">Blog</p>
        </Link>
      </nav>

      <header className="lg:flex lg:justify-between max-h-full lg:mt-32  md:mt-40 align-middle ">
        <div className="m-5 flex-col space-y-4 ">
          <div key="upper" className="sm:text-6xl text-3xl font-bold">
            <p className="sm:text-6xl text-3xl font-bold ">Hello 👋</p>
            My Name Is{" "}
            <span className="text-primary font-black  block sm:text-7xl text-4xl whitespace-pre-wrap">
              Shreyansh Sheth
            </span>
          </div>
          <p
            key="lower"
            className="text-sm md:text-lg capitalize font-semibold italic "
          >
            I'm a Full-Stack Web Developer.
          </p>

          <div>
            <button
              onClick={() => {
                let EmailAddress = "shethshreyansh777@gmail.com";
                //@ts-ignore
                document.location = "mailto:" + EmailAddress;
              }}
              className="text-xl bg-primary sm:mt-16 focus:outline-none text-black md:mt-30 p-3 px-6 font-semibold"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="block w-11/12 mx-auto  lg:w-1/3 lg:mr-24 h-56 mb-20 md:mt-10 lg:mt-auto lg:h-96  sm:h-60 sm:mb-5 lg:mb-36 ">
          <div className="flex justify-end text-xl bg-black border-4 border-white border-b-0">
            <VscChromeMinimize></VscChromeMinimize>
            <VscChromeMaximize></VscChromeMaximize>
            <VscChromeClose></VscChromeClose>
          </div>
          <div
            style={{ fontFamily: "VT323 , monospace" }}
            className="border-4 text-lg md:text-2xl bg-black border-white rounded-sm p-2 h-2/3  text-primary "
          >
            {"👨‍💻:\\Love>"}{" "}
            <Typed
              strings={cmdList}
              typeSpeed={30}
              backSpeed={20}
              loop={true}
            ></Typed>
          </div>
        </div>
      </header>
      <div className="fixed -right-20 group bottom-9 z-50 ">
        <a
          target="_blank"
          rel="noopener"
          className="flex justify-evenly  text-black bg-primary  p-3 pr-5 group mt-2 transition duration-500 ease-in-out  transform lg:hover:-translate-x-16 rounded-md  group"
          href="https://github.com/Shreyansh-Sheth"
        >
          <AiFillGithub className=" text-3xl"></AiFillGithub>
          <p className="capitalize pl-3  font-semibold align-bottom  ">
            github
          </p>
        </a>
        <a
          target="_blank"
          rel="noopener"
          className="flex justify-evenly   text-black bg-primary  p-3 pr-5 group mt-2 transition duration-500 ease-in-out  transform lg:hover:-translate-x-16 rounded-md  group"
          href="https://www.linkedin.com/in/shreyansh-sheth/"
        >
          <AiFillLinkedin className=" text-3xl"></AiFillLinkedin>
          <p className="capitalize pl-3  font-semibold align-bottom">LinkdIn</p>
        </a>
      </div>
      <main>
        <div className=" mt-5">
          <FadeInWhenVisible duration={0.3}>
            <p className="sm:text-5xl  italic  p-5 my-5 md:mx-20 mx-2  text-4xl font-semibold capitalize">
              My Work
            </p>
          </FadeInWhenVisible>
          <div>
            {projectList.map((e, idx) => {
              return (
                <ProjectTab
                  heading={e.heading}
                  link={e.link}
                  subText={e.subText}
                  tech={e.tech}
                  key={idx}
                  status={e.status}
                  liveLink={e.liveLink}
                ></ProjectTab>
              );
            })}
          </div>
        </div>

        <div className="  sm:mt-32 mt-16">
          <FadeInWhenVisible duration={0.3}>
            <p className="sm:text-5xl  italic  px-5 my-5 md:mx-20 mx-2  text-4xl font-semibold capitalize">
              Skills
            </p>
          </FadeInWhenVisible>

          <div className="mt-9 grid lg:grid-cols-3 grid-cols-1 md:mx-20 mx-2 md:gap-10 gap-4">
            {SkillList.map((e, i) => (
              <SkillTab
                name={e.name}
                percentage={e.percentage}
                link={e.link}
                key={i}
              ></SkillTab>
            ))}
          </div>
        </div>
      </main>

      <footer className="sm:text-2xl text-xl text-center py-28 pb-20">
        Made With <span className="text-red-700">♥</span> By Shreyansh Sheth
      </footer>
    </div>
  );
}
