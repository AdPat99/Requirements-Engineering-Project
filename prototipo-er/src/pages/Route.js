import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
//import MapboxDirections from 'mapbox-gl-directions';


mapboxgl.accessToken = 'pk.eyJ1IjoiYmxhZGU1MDUiLCJhIjoiY2xjam1objF0MDdhNzNzbXF1ajZ3dXRwZyJ9.s86_N4CXmXrLt2DglrNuWw';


export default function Route() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-16.9000);
  const [lat, setLat] = useState(32.6333);
  const [zoom, setZoom] = useState(9);


  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });



  return (
    <>
      <div>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
       <br></br>
        <form>
  <label>
    Please enter starting location
    <input type="text" name="strating location" />
  </label>
  <label>
    Please enter destination
    <input type="text" name="destination" />
  </label>
  <input type="submit" value="Submit" />
</form>
<br></br><br></br><br></br><br></br>
<p>Please note, this function is not complete, the user may enter locations and the map can be interacted with,
  but the fields are there for demonstration puroses only</p>
      </div>
    </>
  )
}
