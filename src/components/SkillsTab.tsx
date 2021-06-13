import iSkill from "../interfaces/skills";
import FadeInWhenVisible from "./FadeInAnimation";

export default function SkillTab({ link, name, percentage }: iSkill) {
  return (
    <FadeInWhenVisible duration={0.3}>
      <a
        target="_blank"
        rel="noopener"
        href={link ? link : "#"}
        className="  block  md:p-5 p-1  group hover:border-primary  border-2 border-transparent  bg-indigo-900  hover:bg-blue-900 transition duration-500 ease-in-out    rounded-md "
      >
        <div className="flex justify-between">
          <p className="text-left capitalize sm:text-xl font-bold text-lg">
            {" "}
            {name}
          </p>
          <p className="text-xl text-pink-500">{percentage}%</p>
        </div>
        <div className=" pt-1">
          <div className="overflow-hidden h-2 mb-1 md:mb-4 text-xs flex rounded bg-pink-200">
            <div
              style={{ width: `${percentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
            ></div>
          </div>
        </div>
      </a>
    </FadeInWhenVisible>
  );
}
