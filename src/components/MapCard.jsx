import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapCard.css';

// Fix for marker icons relative path issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Icon for User Location (Apple Blue Dot Style)
const userLocationIcon = new L.DivIcon({
    className: 'apple-map-marker-container',
    html: `<div class="user-pulse"></div><div class="user-dot"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
});

const MapCard = () => {
  const [mounted, setMounted] = useState(false);
  const position = [30.85995, 75.86026]; // User Location 30.85995° N, 75.86026° E GNE 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{height: '100%', width: '100%', background: '#0f172a'}} />;

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      style={{ height: '100%', width: '100%', background: '#0f172a' }}
      zoomControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      dragging={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />
      <Marker position={position} icon={userLocationIcon} />
    </MapContainer>
  );
};

export default MapCard;
