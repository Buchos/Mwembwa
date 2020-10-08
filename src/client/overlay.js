import React from "react";
import TopBar from "./components/overlay-top";
import LoginBar from "./components/overlay-login";
import Profile from "./components/user/profile";
import "./style/overlay.css";

export default function Overlay() {
    return (
        <div className={"overlay"}>
            <TopBar />
            <LoginBar />
            <Profile />
        </div>
    );
}
