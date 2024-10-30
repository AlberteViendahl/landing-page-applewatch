import { CiSearch } from "react-icons/ci";
import { FaApple } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";

const Nav = () => {
  return (
    <div className="text-white flex justify-between pt-10">
      <FaApple className="text-white w-60 h-60 ml-30 pl-5" />
      <ul className="flex justify-between items-center w-640 h-10 pt-8">
        <li className="hover:text-custom-gray  hover:bg-white rounded-15 hover:pr-4 hover:pl-4">
          Mac
        </li>
        <li className="hover:text-custom-gray  hover:bg-white rounded-15 hover:pr-4 hover:pl-4">
          iPhone
        </li>
        <li className="hover:text-custom-gray  hover:bg-white rounded-15 hover:pr-4 hover:pl-4">
          iPad
        </li>
        <li className="hover:text-custom-gray  hover:bg-white rounded-15 hover:pr-4 hover:pl-4">
          iWatch
        </li>
        <li className="hover:text-custom-gray  hover:bg-white rounded-15 hover:pr-4 hover:pl-4 mr-130">
          Support
        </li>
      </ul>
      <div className="flex pr-10 pt-6 ">
        <CiSearch className="h-20 w-20" />
        <p className="h-2 mx-4">│</p>
        <LuShoppingBag className="h-20 w-20 mr-10" />
      </div>
    </div>
  );
};

export default Nav;
