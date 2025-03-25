import Swippe from "./components/Swippe";

import SectionTitle from "./components/SectionTitle";
import ImageAndTextAbout from "./(pages)/about/components/ImageAndTextAbout";

import ServiceCard from "./components/ServiceCard";

import TestemonialsCards from "./(pages)/testemonials/components/TestemonialsCards";
import Book from "./(pages)/contact/components/Book";
import { headerNav } from "./data/data";
import ElementorSection from "./components/ElementorSection";

import NumberOfClients from "./components/NumberOfClients";

export default function Home() {
  return (
    <div className="">
      {/* Hero section  */}
      <Swippe />
      {/* // Hero section // */}

      {/* elementor section */}
      <div className="container mx-auto pt-24">
        <ElementorSection />
      </div>

      {/* elementor section */}

      {/* about section */}
      <div className="container mx-auto py-24">
        <SectionTitle title={headerNav.about} style={`text-darkBlue`} />
        <ImageAndTextAbout />
      </div>
      {/* about section */}

      <div className="bg-[#F5F8FE] py-24">
        <div className="container mx-auto ">
          <SectionTitle title={headerNav.services} style={`text-darkBlue`} />
          <ServiceCard />
        </div>
      </div>

      {/* <div className="container mx-auto py-24">
        //TODO: add this section
    <QuiltedImageList />
    <BasicTabs/>

    </div> */}

      <div className="py-24">
        <SectionTitle title={headerNav.testimonial} style={`text-darkBlue`} />
        <TestemonialsCards />
      </div>

      <NumberOfClients />

      <div className="bg-[#F5F8FE] pt-24">
        <SectionTitle title={headerNav.contactUs} />
        <Book />
      </div>
    </div>
  );
}
