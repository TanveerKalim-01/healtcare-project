import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faPhoneFlip,
  faSquareH,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import Reuse from "./Reuse";

function Header() {
  return (
    <header className="border-b border-gray-300">
      <div className="h-20 flex items-center justify-between lg:justify-start w-11/12 max-w-[1150px] mx-auto">
      {/* hamburger icon */}
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          style={{ color: "#9d9e9f" }}
          className="cursor-pointer lg:hidden"
        />
        <div className="lg:flex-grow">
          <Logo />
        </div>

        <div className="lflex-grow  items-center justify-end gap-10 hidden lg:flex">
          <Reuse
            icon={
              <FontAwesomeIcon
                icon={faClock}
                size="2xl"
                style={{ color: "#74C0FC" }}
              />
            }
            p1="Mon – Fri : - 8:00 AM - 8:00 PM"
            p2="Sat - Sun : - Closed"
          />
          <Reuse
            icon={
              <FontAwesomeIcon
                icon={faSquareH}
                style={{ color: "#74C0FC" }}
                size="2x"
              />
            }
            p1="121 King Street, Melbourne,"
            p2="Victoria 3000 Australia"
          />
        </div>

        <FontAwesomeIcon
          icon={faPhoneFlip}
          size="2x"
          style={{ color: "#9d9e9f" }}
          className="cursor-pointer lg:hidden"
        />
      </div>
    </header>
  );
}

export default Header;
