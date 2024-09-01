"use client";

import { Marker, Popup } from 'react-leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useMapEvents, Rectangle } from 'react-leaflet';
import React, { useCallback, useState, useMemo, useEffect } from 'react';
import L from 'leaflet';
import './CSS/map.css';
import Button from './Components/Button';

export default function Map() {
  const [map, setMap] = useState(null);
  const [routingControl, setRoutingControl] = useState(null);

  const handleClick = (e) => {
    if (map) {
      if (routingControl) {
        map.removeControl(routingControl);
      }

      const waypoints = [
        L.latLng(map.getCenter()), // Start point (current map center)
        e.latlng // Clicked point
      ];

      const control = L.Routing.control({
        waypoints,
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: '#0078FF', weight: 6 }]
        },
        createMarker: function (i, waypoint, number) {
          return L.marker(waypoint.latLng, {
            icon: DefaultIcon
          }).bindPopup('Point ' + number);
        }
      }).addTo(map);

      setRoutingControl(control);
    }
  };

  function LocationMarker(pos) {
    const [position, setPosition] = useState(pos);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker icon={DefaultIcon} position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
  };

  const BOUNDS_STYLE = { weight: 1 };

  function MinimapBounds({ parentMap, zoom }) {
    const minimap = useMap();

    const onClick = useCallback(
      (e) => {
        parentMap.setView(e.latlng, parentMap.getZoom());
      },
      [parentMap],
    );

    useMapEvents('click', onClick);

    const [bounds, setBounds] = useState(parentMap.getBounds());
    const onChange = useCallback(() => {
      setBounds(parentMap.getBounds());
      minimap.setView(parentMap.getCenter(), zoom);
    }, [minimap, parentMap, zoom]);

    useEffect(() => {
      parentMap.on('move', onChange);
      parentMap.on('zoom', onChange);
      return () => {
        parentMap.off('move', onChange);
        parentMap.off('zoom', onChange);
      }
    }, [parentMap, onChange]);

    return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
  }

  function MinimapControl({ position, zoom }) {
    const parentMap = useMap();
    const mapZoom = zoom || 0;

    const minimap = useMemo(
      () => (
        <MapContainer
          style={{ height: 80, width: 80 }}
          center={parentMap.getCenter()}
          zoom={mapZoom}
          dragging={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          attributionControl={false}
          zoomControl={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
        </MapContainer>
      ),
      [parentMap, mapZoom]
    );

    const positionClass = (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;
    return (
      <div className={positionClass}>
        <div className="leaflet-control leaflet-bar">{minimap}</div>
      </div>
    );
  }

  return (
  
      <MapContainer center={[18.98878, 73.11013]} zoom={13} whenCreated={setMap} onClick={handleClick}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MinimapControl position="bottomleft" />
        <Marker icon={DefaultIcon} position={[18.98878, 73.11013]}>
        <Popup>
            <div>
                <h3>LTPS INFRA  PVT. LTD</h3>
                <small>Real estate builders & construction company in Navi Mumbai, Maharashtra</small>
                <p>113, A-Wing, Sai Arcade, Opp. Panvel ST Stand, Panvel, Dist. Raigad</p>
                <p>9323823009 / 9537577777</p>
                <Button text="Get Directions" onClick={() => alert('Directions')} />
            </div>
        </Popup>
      </Marker>
      </MapContainer>

  );
}

// Setting default marker icon globally
const DefaultIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [30, 30]
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;
