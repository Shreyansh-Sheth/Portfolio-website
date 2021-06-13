import iProjects from "../interfaces/projects";
import FadeInWhenVisible from "./FadeInAnimation";

export default function ProjectTab({
  heading,
  link,
  status,
  subText,
  tech,
}: iProjects) {
  return (
    <FadeInWhenVisible duration={0.3}>
      <a
        target="_blank"
        rel="noopener"
        href={link}
        className="p-5 my-5 md:mx-20 mx-2 group hover:border-primary  border-2 border-transparent  bg-indigo-900  hover:bg-blue-900 transition duration-500 ease-in-out  block  rounded-md "
      >
        <div className="text-left capitalize sm:text-3xl font-bold text-2xl ">
          {heading}
        </div>
        <div className="flex justify-between ">
          <div className="text-left capitalize font-semibold mr-2 text-sm sm:text-xl">
            {subText}.
          </div>
          <div className="md:inline hidden text-sm pl-2 text-blue-200 italic">
            {status}
          </div>
        </div>
        <div className="italic text-left text-xs text-blue-200 md:hidden">
          {status}
        </div>
        <div className="text-left text-sm mt-2  break-all">
          {tech.map((e, i) => (
            <span
              className="mr-2 bg-blue-300 text-black rounded-md capitalize p-1 "
              key={i}
            >
              {e}
            </span>
          ))}
        </div>
      </a>
    </FadeInWhenVisible>
  );
}
