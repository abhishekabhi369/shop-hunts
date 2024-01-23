import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

function Home() {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaTM2OSIsImEiOiJjbHF6Y3g5b2EwMGVpMnBwOGR2dmcyZnFvIn0.EH6cigOGorSwgbPsQZo2jQ';

    let map;

    navigator.geolocation.getCurrentPosition(
      successLocation,
      errorLocation,
      { enableHighAccuracy: true }
    );

    function successLocation(position) {
      const center = [position.coords.longitude, position.coords.latitude];
      setupMap(center);
      addMarker(center);
    }

    function errorLocation() {
      const center = [-2.24, 53.48]; 
      setupMap(center);
      addMarker(center);
    }

    function setupMap(center) {
      map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
      });

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);

      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });

      map.addControl(directions, 'top-left');
    }

    function addMarker(center) {
      const marker = new mapboxgl.Marker().setLngLat(center).addTo(map);

      
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML('You are here');
    
      popup.addTo(map);
      marker.setPopup(popup);
    
      
      marker.getElement().style.cursor = 'pointer';
    }

    return () => {

    };
  }, []);

  return <div id='map' style={{ height: '90vh', width: '100%' }} />;
}

export default Home;
