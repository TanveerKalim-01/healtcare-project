import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-white">
      <div  className="w-11/12 max-w-[1180px] mx-auto h-16  items-center hidden lg:flex">
      <ul className=" flex-grow flex gap-8 text-[#666666] text-[15px]">
        <div className="hover:text-[#00a3c8] transition-colors duration-200 cursor-pointer">
          <span >
            Home
          </span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
        </div>
        <div className="hover:text-[#00a3c8] transition-colors duration-200 cursor-pointer">
        <span >
            Pages
          </span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
        </div>
        <div className="hover:text-[#00a3c8] transition-colors duration-200 cursor-pointer">
          <span >
            Half Menu
          </span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />{" "}
        </div>
        <div className="hover:text-[#00a3c8] transition-colors duration-200 cursor-pointer">
          <span >
            Mega Menu{" "}
          </span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />{" "}
        </div>

        <div className="hover:text-[#00a3c8] transition-colors duration-200 cursor-pointer">
          <span >
            Simple Link
          </span>{" "}
        </div>
      </ul>
      <Button text="Our Doctors Timetable" />
      </div>
    </nav>
  );
}

export default Navbar;
