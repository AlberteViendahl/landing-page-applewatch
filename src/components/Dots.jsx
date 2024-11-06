import { BsThreeDotsVertical } from "react-icons/bs";

const Dots = ({ setWatchColor }) => {
  return (
    <div className="ml-20 mt-20">
      <li
        onClick={() => setWatchColor("grey")}
        className="bg-grey w-20 h-20 border border-white rounded-full ml-0.5 list-none"
      ></li>
      <BsThreeDotsVertical className="ml-1 text-white" />

      <li
        onClick={() => setWatchColor("blue")}
        className="bg-blue w-20 h-20 border border-white rounded-full ml-0.5 list-none"
      ></li>
      <BsThreeDotsVertical className="ml-1 text-white" />

      <li
        onClick={() => setWatchColor("pink")}
        className="bg-pink w-20 h-20 border border-white rounded-full ml-0.5 list-none"
      ></li>
    </div>
  );
};

export default Dots;
