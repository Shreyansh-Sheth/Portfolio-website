import Head from "next/head";
import Link from "next/link";
import FadeInWhenVisible from "../src/components/FadeInAnimation";
import ProjectTab from "../src/components/ProjectTab";
import Technology from "../src/components/Technology";
import projectList from "../src/config/projectList";
import TechList from "../src/config/techList";

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Sheth Shreyansh</title>
        <meta name="description" content="Web Devloper , Content Writer"></meta>
        <meta name="author" content="Shreyansh Sheth"></meta>
      </Head>
      <nav className="flex justify-end m-10 text-lg">
        <Link href="/blog" prefetch={true}>
          <p className="underline cursor-pointer sm:text-2xl text-lg">Blog</p>
        </Link>
      </nav>

      <header className="h-screen80 mt-32 sm:mt-40 align-middle">
        <div className="m-5 flex-col space-y-4">
          <p className="sm:text-6xl text-3xl font-bold ">Hello!</p>
          <p className="sm:text-6xl text-3xl font-bold">
            My Name Is{" "}
            <span className="text-primary block whitespace-pre-wrap">
              Shreyansh Sheth
            </span>
          </p>
          <p className=" text-lg">I'm a full-stack web devloper.</p>

          <div>
            <button
              onClick={() => {
                let EmailAddress = "ShreyanshSheth777@gmail.com";
                //@ts-ignore
                document.location = "mailto:" + EmailAddress;
              }}
              className="bg-primary sm:mt-16 focus:outline-none text-black md:mt-30 p-3 px-6 font-semibold"
            >
              Contact Me
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="text-center ">
          <p className="sm:text-5xl mb-5 text-4xl font-semibold capitalize">
            My Projects
          </p>
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
                ></ProjectTab>
              );
            })}
          </div>
        </div>

        <div className="text-center  sm:mt-32 mt-10">
          <p className="sm:text-5xl text-4xl font-semibold capitalize">
            Technologies I Know And Love
          </p>
          <div className="mt-9 grid md:grid-cols-3 grid-cols-1 gap-4">
            {TechList.map((e, idx) => (
              <Technology
                link={e.link}
                name={e.name}
                stars={e.stars}
                key={idx}
              ></Technology>
            ))}
          </div>
        </div>
      </main>

      <footer className="sm:text-2xl text-xl text-center my-28">
        Made With <span className="text-red-700">♥</span> By Shreyansh Sheth
      </footer>
    </div>
  );
}
