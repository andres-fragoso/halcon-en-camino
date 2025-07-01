import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const coordenadas = {
  norte: [25.4382, -100.9835],
  sur: [25.4068, -100.9814],
  este: [25.4315, -100.9500],
  oeste: [25.4191, -101.0180],
  central: [25.4261, -100.9957]
};

export default function MapRuta({ ruta }) {
  const center = coordenadas[ruta] || [25.4261, -100.9957];

  return (
    <MapContainer center={center} zoom={14} scrollWheelZoom={false} style={{ height: "75vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          Ubicación actual de la ruta {ruta}.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
