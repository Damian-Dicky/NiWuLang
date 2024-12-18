"use client";

import { Marker, Popup } from "react-leaflet";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useMapEvents, Rectangle } from "react-leaflet";
import React, { useCallback, useState, useMemo, useEffect } from "react";
import L from "leaflet";
import "./CSS/map.css";
import Button from "./Components/Button";

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
        e.latlng, // Clicked point
      ];

      const control = L.Routing.control({
        waypoints,
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: "#0078FF", weight: 6 }],
        },
        createMarker: function (i, waypoint, number) {
          return L.marker(waypoint.latLng, {
            icon: DefaultIcon,
          }).bindPopup("Point " + number);
        },
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
    bottomleft: "leaflet-bottom leaflet-left",
    bottomright: "leaflet-bottom leaflet-right",
    topleft: "leaflet-top leaflet-left",
    topright: "leaflet-top leaflet-right",
  };

  const BOUNDS_STYLE = { weight: 1 };

  function MinimapBounds({ parentMap, zoom }) {
    const minimap = useMap();

    const onClick = useCallback(
      (e) => {
        parentMap.setView(e.latlng, parentMap.getZoom());
      },
      [parentMap]
    );

    useMapEvents("click", onClick);

    const [bounds, setBounds] = useState(parentMap.getBounds());
    const onChange = useCallback(() => {
      setBounds(parentMap.getBounds());
      minimap.setView(parentMap.getCenter(), zoom);
    }, [minimap, parentMap, zoom]);

    useEffect(() => {
      parentMap.on("move", onChange);
      parentMap.on("zoom", onChange);
      return () => {
        parentMap.off("move", onChange);
        parentMap.off("zoom", onChange);
      };
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
          zoomControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
        </MapContainer>
      ),
      [parentMap, mapZoom]
    );

    const positionClass =
      (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;
    return (
      <div className={positionClass}>
        <div className="leaflet-control leaflet-bar">{minimap}</div>
      </div>
    );
  }

  return (
    <MapContainer
      center={[29.305963902072047, 103.1154907758075]}
      zoom={13}
      whenCreated={setMap}
      onClick={handleClick}
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <MinimapControl position="bottomleft" /> */}
      <Marker
        icon={DefaultIcon}
        position={[29.305963902072047, 103.1154907758075]}
      >
        <Popup>
          <div className="Popup">
            <h3>NiWuLang PVT. LTD</h3>
            <small>
              Real estate builders & construction company in Navi Mumbai,
              Maharashtra
            </small>
            <Button
              text="Get Directions"
              onClick={() => {
                global.window.open(
                  "https://www.google.com/maps/place/%E4%B8%AD%E5%9B%BD%E5%9B%9B%E5%B7%9D%E7%9C%81%E4%B9%90%E5%B1%B1%E5%B8%82%E9%87%91%E5%8F%A3%E6%B2%B3%E5%8C%BA%E9%87%91%E6%B2%B3%E9%95%87+%E9%82%AE%E6%94%BF%E7%BC%96%E7%A0%81:+614799/@29.3079473,103.1066073,15z/data=!4m10!1m2!2m1!1z5Zub5bed55yB5LmQ5bGx5biC6YeR5Y-j5rKz5Yy66YeR5rKz6ZWH5bel5Lia5Zut5Yy6!3m6!1s0x36e66d974e4cf413:0x8c9d2311158d3d12!8m2!3d29.305367!4d103.115534!15sCjPlm5vlt53nnIHkuZDlsbHluILph5Hlj6PmsrPljLrph5HmsrPplYflt6XkuJrlm63ljLqSAQxzdWJsb2NhbGl0eTLgAQA!16s%2Fg%2F1hb_gsjww?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                );
              }}
            />
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

// Setting default marker icon globally
const DefaultIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize: [30, 30],
});

L.Marker.prototype.options.icon = DefaultIcon;
