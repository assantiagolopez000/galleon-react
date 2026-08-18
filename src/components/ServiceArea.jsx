import cities from "../data/cities";

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});



function ServiceArea() {
    const greenOptions = {color:"#2f6b3a", fillColor:"#2f6b3a", fillOpacity: 0.3}

    return (
        <section className="service-area-section" id="service-area">
            <h2 className="section-title">Areas We Serve</h2>
            <div className="section-content">
                <p className="service-area-intro">Proudly serving Southwest Florida homeowners with reliable, high-quality lawn and landscape care.</p>
                
                    <MapContainer center={[26.28,-81.75]} zoom={10} scrollWheelZoom={false} id="service-map">
                        <TileLayer attribution="&copy: <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {cities.map((city) => (
                            <Marker position={city.coords} key={city.id}>
                                <Popup>
                                    <p>{city.name}<br></br>Service Area</p>
                                </Popup>
                            </Marker>
                        ))}
                        <Circle
                            center={[26.28,-81.75]}
                            pathOptions={greenOptions}
                            radius={40000}
                        />
                    </MapContainer>
                
                <p className="service-area-note">Not sure if we cover your area? <a href="#contact">Reach Out</a> and we'll let you know.</p>
            </div>
        </section>
    );
}

export default ServiceArea;