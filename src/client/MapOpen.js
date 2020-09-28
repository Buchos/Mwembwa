// eslint-disable-next-line unicorn/filename-case
import React from "react";
import "./MapOpen.css";
import {Map, Marker, TileLayer} from "react-leaflet";
import Trees from "./data/arbustum.json";

function MapOpen() {
    return (
        <Map center={[50.64, 5.57]} zoom={14}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {Trees.map((tree) => (
                <Marker
                    key={tree.arbotag}
                    position={[tree.y_phi, tree.x_lambda]}
                />
            ))}
        </Map>
    );
}

export default MapOpen;
