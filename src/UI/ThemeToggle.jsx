import MOON from "../assets/LightMode.svg";
import SUN from "../assets/DarkMode.svg";

const ThemeToggle = ({ toggleTheme, isModeDark }) => {
  return (
    <div
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-50 cursor-pointer rounded-full bg-SolidHeading p-4"
    >
      {isModeDark ? (
        <img src={MOON} className="w-6" alt="" />
      ) : (
        <img src={SUN} className="w-6" alt="" />
      )}
    </div>
  );
};

export default ThemeToggle;
