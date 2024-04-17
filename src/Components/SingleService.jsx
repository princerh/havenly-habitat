/* eslint-disable react/prop-types */
import 'animate.css';


const SingleService = ({service}) => {

    const {image, id, service_title, description, price_range, location, facilities} = service; 

    return (
        <div className={`flex flex-col   ${id%2 === 1 ? "md:flex-row lg:flex-row" : "md:flex-row-reverse lg:flex-row-reverse"} justify-between items-center p-4 border border-black rounded-xl gap-5 animate__animated ${id%2 === 1? "animate__fadeInLeftBig":"animate__fadeInRightBig"}`}>
            <div>
                <img className="w-[500px] h-[200px] rounded-md" src={image} alt="" />
            </div>
            <div className="space-y-1">
                <h2 className="text-xl font-bold">{service_title}</h2> 
                <p className="font-semibold">Description: <span className="font-normal">{description}</span></p>

            
                    <p className="font-semibold">Price Ranges: <span  className="font-normal">{price_range}</span></p>
                    <p className="font-semibold">Location: <span className="font-normal">{location}</span></p>
               
                
                <p className="font-semibold">Facilities: {
                    facilities.map((facility, idx) => <span className="text-blue-600 font-normal mr-2 flex-wrap" key={idx}>#{facility}</span>)
                    }</p>
            </div>
        </div>
    );
};

export default SingleService;