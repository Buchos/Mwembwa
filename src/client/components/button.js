import React from "react";
import "../style/buttons.css";

export default function Button(props) {
    return (
        <button
            className={"button"}
            type={"button"}
            onClick={props.handleClick}>
            {props.label}
        </button>
    );
}
