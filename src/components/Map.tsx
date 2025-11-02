import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in production
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // SachTech Solution Private Limited coordinates
    const companyLocation: [number, number] = [30.7046, 76.6931];
    
    // Initialize map
    map.current = L.map(mapContainer.current).setView(companyLocation, 15);

    // Add OpenStreetMap tiles (completely free, no API key needed)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Add marker with popup
    const marker = L.marker(companyLocation).addTo(map.current);
    marker.bindPopup(`
      <div style="font-family: system-ui, -apple-system, sans-serif; padding: 4px;">
        <strong style="font-size: 14px; display: block; margin-bottom: 6px;">SachTech Solution Pvt. Ltd.</strong>
        <span style="font-size: 13px; color: #666;">
          Plot No.E-110, Phase-7<br/>
          Industrial Area, Mohali<br/>
          Punjab 160059
        </span>
      </div>
    `);

    // Cleanup
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <div className="w-full h-[500px]">
      <div ref={mapContainer} className="w-full h-full rounded-lg" />
    </div>
  );
};

export default Map;
