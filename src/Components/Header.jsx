import { useState } from "react";

import WhiteMenu from "../assets/WhiteMenu.svg";
import Menu from "../assets/Menu.svg";
import DarkModeHeaderIcons from "../assets/DarkModeHeaderIcon";
import UL from "../UI/UL";
const Header = ({ isModeDark }) => {
  const [isMenuOpen, setMenuStatus] = useState(false);
  const OpenMenu = () => {
    setMenuStatus(true);
  };
  const CloseMenu = () => {
    setMenuStatus(false);
  };

  return (
    <header className="container mx-auto flex items-center justify-between p-4 font-DMSans text-LightContent dark:text-DarkContent ">
      <span className="bg-gradient-to-r from-GradientStart to-GradientEnd bg-clip-text text-2xl font-bold tracking-wide text-transparent">
        SuKaar
      </span>
      <nav className="items-center gap-8 md:flex">
        <img
          onClick={OpenMenu}
          src={isModeDark ? WhiteMenu : Menu}
          className="w-8 cursor-pointer md:hidden"
          alt=""
        />
        <UL CloseMenu={CloseMenu} Active={isMenuOpen} />
        <div className="hidden items-center gap-8 md:flex">
          <a href="https://github.com/Muhammed-Ibrahem/" target="_blank">
            <img
              className="w-6"
              src={DarkModeHeaderIcons.DarkGithub}
              alt="Github icon that send to my github account"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-ibrahem-5a02ba253/"
            target="_blank"
          >
            <img
              className="w-6"
              src={DarkModeHeaderIcons.DarkLinkedIn}
              alt="LinkedIn icon that sends to my linkedin account"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
