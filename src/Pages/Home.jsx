/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import EstateCard from "../Components/EstateCard";
import SwipperBanner from "../Components/SwipperBanner";
import { Helmet } from "react-helmet-async";
import 'animate.css';
const Home = () => {


    const estates = useLoaderData();

    return (
        <div className="mt-5">
           <Helmet>
           <title>Havenly | Home</title>
           </Helmet>
           <div className=" animate__animated animate__fadeInDown">
           <SwipperBanner></SwipperBanner>
           </div>
           <div className="flex flex-col justify-center items-center my-8">
            <div className="animate__animated animate__fadeInLeftBig">
            <h2 className="text-2xl lg:text-3xl flex flex-col items-center mb-4 font-extrabold">Our Estates</h2>
            <p className= "lg:w-3/4 mx-auto px-2 lg:px-0">Welcome to Our Estates, where dreams find their home and memories are made. Explore our diverse collection of properties, each offering a unique blend of comfort, style, and functionality. Whether you're seeking a cozy family retreat, a vibrant urban oasis, or a tranquil rural escape, we have the perfect estate to suit your lifestyle and aspirations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 animate__animated animate__fadeInRightBig">
                {
                    estates.map(estate => <EstateCard key={estate.id} estate={estate}></EstateCard>)
                }
            </div>
           </div>
        </div>
    );
};

export default Home;