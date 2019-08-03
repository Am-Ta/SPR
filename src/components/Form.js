import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";

/*
@export default
@class: Form
@extends: Component
*/
class Form extends Component {
    /*
    @params Event Object
    */
    handleChange = event => {
        console.log(event.target.name);
    };

    render() {
        const formComp = (
            <form className="createAccForm">
                <Input
                    label="First Name"
                    type="text"
                    name="fname"
                    handleChange={this.handleChange}
                />
                <Input
                    label="Last Name"
                    type="text"
                    name="lname"
                    handleChange={this.handleChange}
                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    handleChange={this.handleChange}
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    handleChange={this.handleChange}
                />
                <Button />
                <p className="createAccForm__text">
                    Already have an account? <a href="#">Login</a>
                </p>
            </form>
        );

        return formComp;
    }
}

export default Form;
