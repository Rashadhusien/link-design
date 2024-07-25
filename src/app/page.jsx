import Swippe from "./components/Swippe";

import HomePageTitle from "./components/HomePageTitle";
import ImageAndTextAbout from "./about/components/ImageAndTextAbout";
import ServiceCard from "./services/components/ServiceCard";

import TestemonialsCards from "./testemonials/components/TestemonialsCards";
import Book from "./contact/components/Book";
import { headerNav } from "./data/data";


export default async function Home() {

  return (

      <div className="">
        <Swippe />
        <div className="container mx-auto py-24">
        <HomePageTitle
              title={headerNav.about}
              style={`text-darkBlue`}
            />
          <ImageAndTextAbout />
        </div>
        <div className="bg-[#F5F8FE] py-24">
          <div className="container mx-auto ">
            <HomePageTitle
              title={headerNav.services}
              style={`text-darkBlue`}
            />
            <ServiceCard />
          </div>
        </div>
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
