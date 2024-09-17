import { IoHomeOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FiPackage } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import Icons from "./Icons";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="pair">
        <Icons className="icons">
          <IoHomeOutline className="icon" />
        </Icons>
        <Icons className="icons">
          <IoMailOutline className="icon" />
        </Icons>
        <Icons className="icons">
          <FiPackage className="icon" />
        </Icons>
      </div>
      <Icons className="icons">
        <IoSettingsOutline className="icon" />
      </Icons>
    </nav>
  );
};

export default Navbar;
