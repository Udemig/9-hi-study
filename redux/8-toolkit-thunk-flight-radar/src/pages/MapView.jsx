import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';

const MapView = ({ setDetailId }) => {
  const { flights } = useSelector((store) => store.flightReducer);

  // market için kendi iconumuzu oluşturduk
  const planeIcon = icon({
    iconUrl: 'plane-icon.png',
    iconSize: [30, 30],
  });

  return (
    <MapContainer center={[39.09, 35.44]} zoom={7} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) => (
        <Marker
          icon={planeIcon}
          key={flight.id}
          position={[flight.lat, flight.lng]}
        >
          <Popup>
            <div className="d-flex flex-column gap-2">
              <span>Kod: {flight.code}</span>
              <button onClick={() => setDetailId(flight.id)}>Detay</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
