import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import { useTheme } from "@/components/common/theme-provider";

import type { PersonalInfo } from "@/types/resume";

interface MapsAddressProps {
    data: PersonalInfo;
}

// Fix default icon path
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [27, 20],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapsAddress: React.FC<MapsAddressProps> = ({ data }) => {
    const { theme } = useTheme()

    return (
        <MapContainer
            center={[data.latitude, data.longitude]}
            zoom={16}
            style={{ height: "400px", width: "100%" }}
            className="z-0"
        >
            <TileLayer
                url={
                    theme === "dark"
                        ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                }
            />
            <Marker position={[data.latitude, data.longitude]}>
                <Tooltip
                    permanent
                    direction="top"
                    offset={[-15, -15]}
                    className="w-[250px] !whitespace-normal break-words"
                >
                    <h5 className="font-bold">🏠 Rumah</h5>
                    <p>{data.address}</p>
                </Tooltip>
            </Marker>
        </MapContainer>
    )
}

export default MapsAddress;