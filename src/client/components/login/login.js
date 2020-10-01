import React from "react";

export default function Login() {
    return (
        <div className={"modal-style"}>
            <h2>Log In</h2>
            <input placeholder={"Email"} type={"email"} />
            <input placeholder={"Password"} type={"text"} />
        </div>
    );
}
