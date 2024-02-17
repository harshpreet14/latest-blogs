import { useState } from "react";
import {  hamburgerMenu, close } from "../assets";
import {Link} from 'react-router-dom';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[70px] bg-white border-b">
      <div className="md:max-w-[1000px] max-w-[500px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <Link to="/"> <p className="text-2xl text-blue-700 tracking-wide hover:text-blue-900">Ayush Sharma</p></Link>
        <div className="hidden md:flex items-center ">
          <ul className="flex gap-6">
            <Link to="/"><li className="hover:text-blue-600 hover:font-semibold">Home</li></Link>
            <Link to="/blogs"><li className="hover:text-blue-600 hover:font-semibold">Blogs</li></Link>
            <li className="hover:text-blue-600 hover:font-semibold">Contact</li>
          </ul>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close: hamburgerMenu} />
        </div>
      </div>
      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">Blogs</li>
          <li className="p-4 hover:bg-gray-100">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;