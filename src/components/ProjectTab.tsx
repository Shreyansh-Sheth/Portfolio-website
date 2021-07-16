import { VscGithub } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import iProjects from "../interfaces/projects";
import FadeInWhenVisible from "./FadeInAnimation";

export default function ProjectTab({
  heading,
  link,
  status,
  subText,
  tech,
  liveLink,
}: iProjects) {
  return (
    <FadeInWhenVisible duration={0.3}>
      <p className="md:grid grid-cols-3 block p-5 my-5 md:mx-20 mx-2 group   border-2 border-transparent  bg-indigo-900  hover:bg-blue-900 transition duration-500 ease-in-out    rounded-md ">
        <div className="col-span-2 mb-3 md:mb-0">
          <div className="text-left capitalize sm:text-3xl font-bold text-2xl ">
            {heading}
          </div>
          <div className="text-left capitalize font-semibold mr-2 text-sm sm:text-xl">
            {subText}.
          </div>
          <div className="text-left text-sm mt-2  break-all space-y-3">
            {tech.map((e, i) => (
              <p
                className="inline-block mr-2 bg-blue-300 text-black rounded-md capitalize p-1 "
                key={i}
              >
                {e}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-2 md:mt-0 text-right space-y-3 justify-end mr-0 ml-auto my-auto">
          <a
            target="_blank"
            href={link}
            className="pointer bg-blue-300 flex pl-2 p-1 justify-between rounded-md text-black border-2 border-transparent hover:border-primary "
          >
            <p className="mr-2"> Github</p>
            <VscGithub className="text-2xl"></VscGithub>
          </a>
          {liveLink && (
            <a
              target="_blank"
              href={liveLink}
              className="pointer bg-blue-300 flex pl-2 p-1 justify-between rounded-md text-black border-2 border-transparent hover:border-primary "
            >
              <p className="mr-2"> Live </p>
              <FiExternalLink className="text-2xl"></FiExternalLink>
            </a>
          )}
        </div>
      </p>
    </FadeInWhenVisible>
  );
}
