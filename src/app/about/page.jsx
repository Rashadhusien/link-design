import Certifications from "./components/Certifications";
import ImageAndTextAbout from "./components/ImageAndTextAbout";

function About() {
  return (
    <div>
      <div className="container mx-auto py-32">
        <ImageAndTextAbout />
        <div className="py-20 ">
          <Certifications />
        </div>
      </div>
    </div>
  );
}

export default About;
