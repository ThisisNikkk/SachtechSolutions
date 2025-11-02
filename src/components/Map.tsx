import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // TODO: Replace with your Mapbox public token from https://mapbox.com/
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    
    // SachTech Solution Private Limited coordinates
    const companyLocation: [number, number] = [76.6931, 30.7046];
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: companyLocation,
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add a marker at the company location with popup
    new mapboxgl.Marker({ color: '#0066cc' })
      .setLngLat(companyLocation)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(
            '<div style="padding: 8px;"><strong>SachTech Solution Pvt. Ltd.</strong><br/>Plot No.E-110, Phase-7<br/>Industrial Area, Mohali<br/>Punjab 160059</div>'
          )
      )
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-[500px]">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
