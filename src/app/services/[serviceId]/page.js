
import PageTitle from "../../components/PageTitle";
import Aside from "./components/Aside";

import Service from "./components/Service";


import { services } from "../../data/data";

function ShowService({ params }) {




  const {  serviceId } = params;





    const currentservice =   services.filter((service) => service.id === Number(serviceId))


  return (
    <>
      <PageTitle title={currentservice[0].title} />
      <div className="container mx-auto flex flex-col lg:flex-row py-32 gap-10">
        <Service service={currentservice[0]} />
        <Aside currentServiceId={Number(serviceId)} />
      </div>
    </>
  );
}

export default ShowService;
