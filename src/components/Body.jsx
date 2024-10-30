import Image from "next/image";
import Dots from "./Dots";

const Body = () => {
  return (
    <div className="grid grid-cols-2 pt-20 pl-10">
      <div className="col-span-1">
        <h1 className="text-60px font-bold text-white ">The Perfect Moment</h1>
        <h2 className="text-60px text-white">Between Past And Future</h2>
      </div>
      <div className="flex">
        <img className=" col-span-1 h-386 w-386" src="/img/navy.png" alt="" />
        <Dots />
      </div>
    </div>
  );
};

export default Body;
