import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";

/**
 * Form component
 *
 * @class Form
 * @extends {Component}
 */
class Form extends Component {
    /**
     *Creates an instance of Form.
     * @param {object} props
     * @memberof Form
     */
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            formErrs: {
                fname: null,
                lname: null,
                email: null,
                password: null
            }
        };
    }

    /**
     * Evaluate the value and then changes the formErrs in state
     *
     * @param {string} name (event.target.name)
     * @param {string} value (event.target.value)
     * @memberof Form
     */
    evaluation = (name, value) => {
        let { formErrs } = this.state;
        let nameErrMes = "At least 3 characters required",
            emailErrMes = "Email is invalid",
            passwordErrMes =
                "Password is invalid, at  least 8 characters and be contains (0-9), (a-z),(A-Z)";

        const emailPattern = /\S+@\S+\.\S+/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

        switch (name) {
            case "fname":
                formErrs.fname = value.length < 3 ? nameErrMes : "";
                break;
            case "lname":
                formErrs.lname = value.length < 3 ? nameErrMes : "";
                break;
            case "email":
                formErrs.email = emailPattern.test(value) ? "" : emailErrMes;
                break;
            case "password":
                formErrs.password = passwordPattern.test(value)
                    ? ""
                    : passwordErrMes;
                break;
        }
    };

    /**
     * handles the changes in input component
     *
     * @param {object} event (event object for input element)
     * @memberof Form
     */
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

        this.evaluation(name, value);
    };

    /**
     * handle the submit in form
     *
     * @param {object} event (event object for form element)
     * @memberof Form
     */
    handleSubmit = event => {
        event.preventDefault();

        const { formErrs } = this.state;

        if (this.validationToSubmit(formErrs)) {
            console.log(`
                --SUBMITTING--
                First Name: ${this.state.fname}
                Last Name : ${this.state.lname}
                Email     : ${this.state.email}
                Password  : ${this.state.password}
            `);
        } else {
            console.error("DISPLAY ERROR - SOMETHING ERROR");
        }
    };

    /**
     * evaluate the value to must be submitted
     *
     * @param {object} formErrs (formErrs in state)
     * @returns
     * @memberof Form
     */
    validationToSubmit = formErrs => {
        let result = true;

        Object.values(formErrs).map(value => {
            if (value == null || value !== "") {
                result = false;
            }
        });

        return result;
    };

    /**
     * render the form component
     *
     * @returns
     * @memberof Form
     */
    render() {
        const formComp = (
            <form
                className="createAccForm"
                onSubmit={this.handleSubmit}
                noValidate
            >
                <Input
                    label="First Name"
                    type="text"
                    name="fname"
                    handleChange={this.handleChange}
                    value={this.state.fname}
                    errValue={this.state.formErrs.fname}
                />
                <Input
                    label="Last Name"
                    type="text"
                    name="lname"
                    handleChange={this.handleChange}
                    value={this.state.lname}
                    errValue={this.state.formErrs.lname}
                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    handleChange={this.handleChange}
                    value={this.state.email}
                    errValue={this.state.formErrs.email}
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    handleChange={this.handleChange}
                    value={this.state.password}
                    errValue={this.state.formErrs.password}
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
