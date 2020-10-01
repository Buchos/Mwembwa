import React from "react";
import TopBar from "./components/overlay-top";
import LoginBar from "./components/overlay-right";
import "./style/overlay.css";

export default function Overlay() {
    return (
        <div className={"overlay"}>
            <TopBar />
            <LoginBar />
        </div>
    );
}
