import { useLoaderData } from "react-router-dom";
import SingleService from "./Components/SingleService";
import { Helmet } from "react-helmet-async";

const Services = () => {

    const services = useLoaderData();

     
    return (
        <div className="space-y-5 mt-4 mb-8">
            <Helmet>
           <title>Havenly | Services</title>
           </Helmet>
            {
                services.map(service => <SingleService key={service.id} service={service}></SingleService>)
            }
        </div>
    );
};

export default Services;