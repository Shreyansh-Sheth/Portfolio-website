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
    <FadeInWhenVisible duration={0.4}>
      <a
        target="_blank"
        href={link}
        className="p-5 bg-gray-700 hover:bg-gray-900 transition duration-500 ease-in-out  block  rounded-md my-5 md:mx-20 mx-2"
      >
        <div className="text-left capitalize sm:text-3xl font-bold text-2xl ">
          {heading}
        </div>
        <div className="flex justify-between ">
          <div className="text-left capitalize font-semibold mr-2 text-sm sm:text-2xl">
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
              className="mr-2 bg-gray-600  rounded-md capitalize p-1 "
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
