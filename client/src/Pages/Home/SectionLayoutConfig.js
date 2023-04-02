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
    "AI Therapist",
    true,
    "Our AI therapist, powered by the ChatGPT API, provides a unique and personalized mental health experience that you can access anytime, anywhere. Whether you're feeling lonely or overwhelmed with dangerous thoughts, our therapist is always available to provide support and guidance. With advanced natural language processing technology, the therapist can engage in personalized conversations to help you work through your emotions and build coping mechanisms. You can feel confident knowing that our therapist is always just a text away, ready to provide the support you need.",
    sectionImage1
  ),
  new Section(
    "Socalizing Chat Server",
    false,
    "Our socializing chat server is intended to help you connect with others who share similar interests and experiences. Whether you're looking for a supportive community to talk to or want to have discussions about schoolwork, this feature provides a safe space for you to socialize and connect with others. With various channels and groups, you can explore different topics and connect with like-minded individuals. Our chat server is designed to foster a sense of community and provide a platform for you to engage with others, so you never have to feel alone.",
    sectionImage2
  ),
  new Section(
    "Find an Event",
    true,
    "Our Find Event feature helps you discover events happening nearby, whether it's a movie night, study group, general meeting, or outdoor meet. With an advanced search option, you can easily find events that match your interests and availability. But that's not all - you can also plan and post your own events on the page, inviting others who share your interests to join. Our feature provides a platform for you to not only discover events but also to connect with like-minded individuals and create your own experiences. With our Find Event feature, you'll never miss out on an opportunity to explore new interests and connect with others.",

    sectionImage3
  ),
  new Section(
    "Join Our Mental Wellness Community",
    false,
    "Join our Mental Health App community now to start prioritizing your mental wellness. With our AI therapist, socializing chat server, and Find Event feature, you'll have access to tools that support your mental health and connect you with like-minded individuals. Sign up today to take the first step towards a happier and healthier you.",
    sectionImage4,
    true
  ),
];

export default Sections;
