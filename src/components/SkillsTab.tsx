import FadeInWhenVisible from "./FadeInAnimation";

export default function ProjectTab() {
  return (
    <FadeInWhenVisible duration={0.3}>
      <div className="p-5 my-5 md:mx-20 mx-2 group hover:border-primary  border-2 border-transparent  bg-indigo-900  hover:bg-blue-900 transition duration-500 ease-in-out  block  rounded-md "></div>
    </FadeInWhenVisible>
  );
}
