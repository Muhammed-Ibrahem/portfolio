import HTML from "../assets/Stack_Html.svg";
import CSS from "../assets/Stack_Css.svg";
import JS from "../assets/Stack_Js.svg";
import REACT from "../assets/Stack_React.svg";
import TAILWIND from "../assets/Stack_Tailwindcss.svg";
import GIT from "../assets/Stack_Git.svg";
import GITHUB from "../assets/Stack_Github.svg";
import SASS from "../assets/Stack_Sass.svg";
import BOOTSTRAP from "../assets/Stack_Bootstrap.svg";
import Github from "../assets/DarkGithub.svg";
import Chain from "../assets/Projects/Group.png";
import LightModeChain from "../assets/Projects/LightModeChain.png";
const StackImages = {
  HTML,
  CSS,
  JS,
  REACT,
  TAILWIND,
  GIT,
  GITHUB,
  SASS,
  BOOTSTRAP,
};
export default Object.keys(StackImages).map((e) => ({
  name: e,
  alt: `${e} icon`,
  src: StackImages[e],
}));
export const footerIcons = {
  Github,
  Chain,
  LightModeChain,
};
