import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const EstateCard = ({estate}) => {

const {image, id, estate_title, segment_name, price, status, area} = estate; 
    return (
        <div className="border p-4 rounded-md shadow-md "> 
            <div className=" relative"> 
                <img src={image} alt="" className="h-40 rounded-t-md w-80" />
                <div className="badge badge-secondary absolute bottom-4 right-4">{status}</div>
            </div>
            
            <h2 className="text-xl play font-semibold my-3 tracking-wide">{estate_title}</h2>
            <p className="dark:text-gray-800 pb-3 border-b-2 border-dashed"> {segment_name}</p>
            <div className="flex pt-3 mb-5 justify-between items-center">
                <p>{area}</p>
                <div className="flex items-center gap-2">
                    <p>{price}</p>
                </div>
            </div>
            <div>
            <Link to={`/estate/${id}`} className="bg-[#328EFF26] text-[#328EFF] cursor-pointer active:scale-90 px-3 py-2 mt-10 rounded-xl">View Property</Link>
            </div>
        </div>
    );
};

export default EstateCard;