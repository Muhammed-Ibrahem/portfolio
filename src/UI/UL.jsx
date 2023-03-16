import Close from "../assets/WhiteClose.svg";
import DarkModeHeaderIcons from "../assets/DarkModeHeaderIcon";
const UL = ({ Active, CloseMenu }) => {
  const ActiveClass = Active ? "right-0" : "-right-full";
  return (
    <>
      <ul
        className={`fixed md:static ${ActiveClass} top-0 z-50 flex h-full w-[70vw] flex-col items-center justify-center gap-8 bg-DarkMode text-HeroHeading shadow-sm transition-[right] duration-500 dark:bg-SolidHeading md:w-full  md:flex-row md:bg-transparent md:text-LightContent md:shadow-none dark:md:bg-transparent`}
      >
        <img
          onClick={CloseMenu}
          src={Close}
          className="absolute top-4 left-4 w-10 cursor-pointer md:hidden"
          alt=""
        />
        <li className="capitalize">
          <a href="#home">home</a>
        </li>
        <li className="capitalize">
          <a href="#stack">teck stack</a>
        </li>
        <li className="capitalize">
          <a href="#projects">projects</a>
        </li>
        <li className="capitalize">
          <a href="#contact">contact</a>
        </li>
        <li className="flex items-center gap-8 md:hidden">
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
        </li>
      </ul>
    </>
  );
};

export default UL;
