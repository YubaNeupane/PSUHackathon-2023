import sectionImage1 from "../../resources/images/home/image6.svg";
import sectionImage2 from "../../resources/images/home/image3.svg";
import sectionImage3 from "../../resources/images/home/image2.svg";
import sectionImage4 from "../../resources/images/home/image4.svg";

class Section {
  constructor(title, imageLeft, text, image, large = false) {
    this.title = title;
    this.imageLeft = imageLeft;
    this.text = text;
    this.image = image;
    this.large = large;
  }
}

const Sections = [
  new Section(
    "Create a place where you belong",
    true,
    "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    sectionImage1
  ),
  new Section(
    "Create a place where you belong",
    false,
    "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    sectionImage2
  ),
  new Section(
    "Create a place where you belong",
    true,
    "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    sectionImage3
  ),
  new Section(
    "Create a place where you belong",
    false,
    "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    sectionImage4,
    true
  ),
];

export default Sections;
