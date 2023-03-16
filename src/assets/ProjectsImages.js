import one from "../assets/Projects/one.png";
import two from "../assets/Projects/two.png";
import three from "../assets/Projects/three.png";
import four from "../assets/Projects/four.png";
import five from "../assets/Projects/five.png";
import six from "../assets/Projects/six.png";

const ProjectsImages = {
  one,
  two,
  three,
  four,
  five,
  six,
};
export default Object.keys(ProjectsImages).map((e) => ({
  name: e,
  alt: `Project Image Placeholder`,
  src: ProjectsImages[e],
}));
