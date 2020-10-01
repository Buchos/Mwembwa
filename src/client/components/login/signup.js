import React from "react";

export default function Signup() {
    return (
        <div className={"modal-style"}>
            <h2>Sign Up</h2>
            <input placeholder={"Name"} type={"text"} />
            <input placeholder={"Email"} type={"email"} />
            <input placeholder={"Password"} type={"text"} />
        </div>
    );
}
