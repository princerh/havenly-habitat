import { useLoaderData } from "react-router-dom";
import SingleService from "./Components/SingleService";

const Services = () => {

    const services = useLoaderData(); 
    return (
        <div className="space-y-5 mt-4 mb-8">
            {
                services.map(service => <SingleService key={service.id} service={service}></SingleService>)
            }
        </div>
    );
};

export default Services;