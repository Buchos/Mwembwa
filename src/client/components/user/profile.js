import React from "react";
import "../../style/profile.css";

export default function Profile() {

    return(
        <div className="user-profile">
            <div className="username">
                <h2>Username</h2>
                <div className="user-color"></div>
            </div>
            <div>   
                <p>0 arbres</p>
                <p>0 feuilles</p>
            </div>
        </div>
    )
}