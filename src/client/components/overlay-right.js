import React from "react";
import Login from "./login/login";
import Signup from "./login/signup";
import Button from "./button";

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
                        <div>
                            {this.state.login ? <Login /> : ""}
                            {this.state.signup ? <Signup /> : ""}
                        </div>
                        <div>
                            <Button
                                label={this.state.login ? "Sign Up" : "Log In"}
                                handleClick={
                                    this.state.login
                                        ? this.showSignup
                                        : this.showLogin
                                }
                            />
                            <Button label={"Enter"} handleClick={this.close} />
                        </div>
                    </div>
                ) : 
                    ""
                }
            </>
        );
    }
}
