import { footerIcons } from "../assets/StackImages";
const ProjectCard = ({
  title,
  description,
  thumbnail,
  stack,
  livePreview,
  viewCode,
}) => {
  const isDarkMode = document.documentElement.className === "dark";
  return (
    <div className="w-full select-none space-y-4 overflow-hidden rounded-lg pb-4 font-Poppins shadow-lg dark:bg-CardBg">
      <div className="border-b border-black/20">
        <img className="w-full" src={thumbnail} alt="Dummy Test" />
      </div>
      <div className="space-y-4 p-4">
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold tracking-wider text-black dark:text-SolidHeadingDarkMode">
          {title}
        </h3>
        <p className="max-h-[80px] overflow-auto text-sm font-light leading-7 text-DarkContent dark:text-SolidHeadingDarkMode">
          {description}
        </p>
        <p className="text-sm text-SolidHeading dark:text-SolidHeadingDarkMode">
          Tech stack:{" "}
          <span className="text-xs font-light">{stack.join(", ")}</span>
        </p>
      </div>
      <footer className="flex items-center justify-between px-4 text-black dark:text-white">
        <a
          href={livePreview}
          target="_blank"
          className="flex items-center gap-1"
        >
          <img
            className="w-4"
            src={isDarkMode ? footerIcons.Chain : footerIcons.LightModeChain}
            alt=""
          />
          <span className="text-sm capitalize">live preview</span>
        </a>
        <a href={viewCode} target="_blank" className="flex items-center gap-1">
          <img className="w-4" src={footerIcons.Github} alt="" />
          <span className="text-sm capitalize">view code</span>
        </a>
      </footer>
    </div>
  );
};
export default ProjectCard;
