import Swippe from "./components/Swippe";

import HomePageTitle from "./components/HomePageTitle";
import ImageAndTextAbout from "./about/components/ImageAndTextAbout";
import ServiceCard from "./services/components/ServiceCard";

import TestemonialsCards from "./testemonials/components/TestemonialsCards";
import Book from "./contact/components/Book";
import { headerNav } from "./data/data";
import ElementorSection from "./components/ElementorSection";
import QuiltedImageList from "./components/QuiltedImageList";
import BasicTabs from "./components/BasicTabs";


export default async function Home() {

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
        <HomePageTitle
              title={headerNav.about}
              
              style={`text-darkBlue`}
              />
          <ImageAndTextAbout />
        </div>
              {/* about section */}




        <div className="bg-[#F5F8FE] py-24">
          <div className="container mx-auto ">
            <HomePageTitle
              title={headerNav.services}
              style={`text-darkBlue`}
            />
            <ServiceCard />
          </div>
        </div>

    {/* <div className="container mx-auto py-24">

    <QuiltedImageList />
    <BasicTabs/>

    </div> */}

        <div className="py-24">
          <HomePageTitle
            title={headerNav.testimonial}
            style={`text-darkBlue`}
            
          />
          <TestemonialsCards />
        </div>
        <div className="bg-[#F5F8FE] pt-24">
          <HomePageTitle title={headerNav.contactUs} />
          <Book />
        </div>
      </div>
  );
}
