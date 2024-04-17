import { Link, useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const estates = useLoaderData(); 
    const { id } = useParams(); 
    const estate = estates.find((estate) => estate.id === parseInt(id));

    const { image, estate_title, description, price, status, area, location, facilities } = estate; 

    return ( 
        <div className="md: max-w-2xl my-8 lg:max-w-3xl mx-auto border p-4 rounded-xl">
            <div>
                <img className="w-full lg:h-[70vh]" src={image} alt="" />
            </div> 
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                <h2 className="text-3xl mt-6 font-extrabold">{estate_title}</h2>
                <div className="badge badge-secondary">{status}</div>
                </div>
                <p className="font-bold">Description: <span className="font-normal text-justify">{description}</span></p>
                <p className="font-bold">Location: <span className="font-normal">{location}</span></p>
                <p className="font-bold">Area: <span className="font-normal">{area}</span></p>
                <div className="font-bold">
                    Facilities: 
                    <ul className="list-disc font-normal ml-4 list-inside">
                        {facilities.map((facility, idx) => (
                            <li key={idx}>{facility}</li>
                        ))}   
                    </ul>
                </div>

                <div>
                    <p className="font-bold mb-5">Price: <span className="font-normal">{price}</span></p>
                    <Link to= "/order" className="bg-[#23BE0A] cursor-pointer active:scale-90 text-white px-3 py-2 rounded-xl">Order</Link>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;
