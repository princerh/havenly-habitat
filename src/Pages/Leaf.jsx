import { Helmet } from 'react-helmet-async';
import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer';

const Leaf = () => {
    return (
        <div className='w-full mt-28 container mx-auto  md:w-1/2 lg:w-1/3 xl:w-1/4'> 
        <Helmet>
           <title>Havenly | Google Map</title>
           </Helmet>
            <MapContainer center={[23.700723, 90.448972]} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                       Havenly Habitat
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Leaf;
