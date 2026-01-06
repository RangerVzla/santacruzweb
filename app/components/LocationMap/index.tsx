"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LocationMapProps } from "./types";

// Custom orange marker icon using brand color
const orangeMarkerSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36">
  <path fill="#df5600" stroke="#fff" stroke-width="1" d="M12 0C5.4 0 0 5.4 0 12c0 7.2 12 24 12 24s12-16.8 12-24c0-6.6-5.4-12-12-12z"/>
  <circle fill="#fff" cx="12" cy="12" r="5"/>
</svg>
`;

const customIcon = new L.Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(orangeMarkerSvg)}`,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
  popupAnchor: [0, -36],
});

export default function LocationMap({ locations }: LocationMapProps) {
  // Calculate center point between all locations
  const centerLat = locations.reduce((sum, loc) => sum + loc.coordinates[0], 0) / locations.length;
  const centerLng = locations.reduce((sum, loc) => sum + loc.coordinates[1], 0) / locations.length;

  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={9}
      scrollWheelZoom={false}
      className="w-full h-full min-h-[400px] rounded-lg z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.coordinates} icon={customIcon}>
          <Popup>
            <div className="text-sm">
              <p className="font-semibold text-black">{location.name}</p>
              <p className="text-orange-600">{location.city}</p>
              <p className="text-neutral-600">{location.address}</p>
              <p className="text-neutral-700 mt-1">
                <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="hover:text-orange-600">
                  📞 {location.phone}
                </a>
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
