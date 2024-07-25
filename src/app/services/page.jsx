import ServiceCard from "./components/ServiceCard";
import PageTitle from "../components/PageTitle";
import { headerNav } from "../data/data";

function Services() {

  return (
    <>
      <PageTitle title={headerNav.services} />
      <div className="py-32 bg-[#F5F8FE] ">
        <div className="container mx-auto  ">
          <ServiceCard />
        </div>
      </div>
    </>
  );
}

export default Services;
