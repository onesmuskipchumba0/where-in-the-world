import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';

const ICON = icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const CountryMap = ({ country }) => {
  if (!country.latlng) return null;

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg mt-8">
      <MapContainer
        center={[country.latlng[0], country.latlng[1]]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        className="z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
          className="dark:invert" // Inverts map colors in dark mode
        />
        <Marker 
          position={[country.latlng[0], country.latlng[1]]} 
          icon={ICON}
        >
          <Popup>
            {country.name.common}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CountryMap; 