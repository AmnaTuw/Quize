import React, { Component } from "react";

class Quize extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: "" };
        this.state = { message2: "" };

    }
    componentDidMount = () => {
        this.setState({ message: "welcome to the jungle" });
    };
    componentDidUpdate(){
        this.setState({ message2: "quize are" });
    }
    render() {
        return (
        <div>
            <h1>Hello </h1>
        </div>
        );
    }
    }
    

