import React from "react";
import Login from "./user/login";
import Signup from "./user/signup";
import Button from "./button";
import "../style/buttons.css";

export default class LoginBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            signup: false,
            window: true,
        };
    }

    showSignup = () => {
        this.setState({
            login: false,
            signup: true,
        });
    };
    showLogin = () => {
        this.setState({
            login: true,
            signup: false,
        });
    };
    close = () => {
        this.setState({
            login: false,
            signup: false,
            window: false,
        });
    };

    render() {
        return (
            <>
                {this.state.window ? (
                    <div className={"overlayLoginContainer"}>
                        <div className={"login-button"}>
                            <Button
                                label={this.state.login ? "Sign Up" : "Log In"}
                                handleClick={
                                    this.state.login
                                        ? this.showSignup
                                        : this.showLogin
                                }
                            />
                        </div>
                        <div className={"login-body"}>
                            {this.state.login ? <Login /> : ""}
                            {this.state.signup ? <Signup /> : ""}
                        </div>
                        <div className={"submit-button"}>
                            <Button 
                                label={"Enter"} 
                                handleClick={this.close} 
                            />
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </>
        );
    }
}
