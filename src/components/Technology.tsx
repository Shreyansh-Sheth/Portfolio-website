import Image from "next/image";
import iTechnology from "../interfaces/technology";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export default function Technology({
  name,

  link,
  stars,
}: iTechnology) {
  const star = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= stars) {
      star.push(
        <AiFillStar
          className="text-blue-400 text-center m-auto "
          key={i + name}
        ></AiFillStar>
      );
    } else {
      star.push(
        <AiOutlineStar
          className="text-blue-400 text-center m-auto "
          key={i + name}
        ></AiOutlineStar>
      );
    }
  }

  return (
    <div className="flex justify-between ">
      <p className="align-middle text-lg sm:text-2xl   pl-7 ">{name}</p>
      <span className="flex justify-evenly pr-7 text-lg sm:text-2xl">
        {star.map((e, i) => e)}
      </span>
    </div>
  );
}
