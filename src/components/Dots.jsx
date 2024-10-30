import { BsThreeDotsVertical } from "react-icons/bs";

const Dots = () => {
  return (
    <div className="ml-20 mt-20">
      <li className="bg-grey w-20 h-20 border border-white rounded-full ml-0.5 list-none"></li>
      <BsThreeDotsVertical className="ml-1 text-white" />
      <BsThreeDotsVertical className="ml-1 text-white" />
      <li className="bg-blue w-20 h-20 border border-white rounded-full ml-0.5 list-none"></li>
      <BsThreeDotsVertical className="ml-1 text-white" />
      <BsThreeDotsVertical className="ml-1 text-white" />
      <li className="bg-pink w-20 h-20 border border-white rounded-full ml-0.5 list-none"></li>
    </div>
  );
};

export default Dots;
