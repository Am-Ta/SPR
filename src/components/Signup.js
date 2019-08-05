import React, { Component } from "react";
import { Link } from "react-router-dom";

/**
 *Signup component
 *
 * @class Signup
 * @extends {Component}
 */
class Signup extends Component {
    /**
     *Creates an instance of Signup.
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
     *Evaluates the value and then changes the formErrs in state
     *
     * @param {string} name (event.target.name)
     * @param {string} value (event.target.value)
     * @memberof Signup
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
     *handles the changes in input component
     *
     * @param {object} event (event object for input element)
     * @memberof Signup
     */
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

        this.evaluation(name, value);
    };

    /**
     *handles the submit in  form element
     *
     * @param {object} event (event object for form element)
     * @memberof Signup
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
            this.setState({
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
            });
        } else {
            console.error("DISPLAY ERROR - FIELDS ARE NULL");
        }
    };

    /**
     *evaluate the value to must be submitted
     *
     * @param {object} formErrs (formErrs in state)
     * @returns
     * @memberof Signup
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
     *extract the suitable class
     *
     * @param {strin} name
     * @returns
     * @memberof Signup
     */
    extClass = name => {
        let input = "form__info";
        let errText = "alert alert_hidden";

        const { formErrs } = this.state;
        const errValue = formErrs[name];

        const errValueLen = errValue === null ? null : errValue.length;

        switch (true) {
            case null:
                break;
            case errValueLen === 0:
                input += " form__info_success";
                break;
            case errValueLen > 0:
                input += " form__info_error";
                errText += " alert_show";
                break;
        }

        return { input, errText };
    };

    /**
     *renders the signup component
     *
     * @returns
     * @memberof Signup
     */
    render() {
        const { fname, lname, email, password, formErrs } = this.state;

        const formComp = (
            <form className="form" onSubmit={this.handleSubmit} noValidate>
                {/* First Name */}
                <div className="form__item half">
                    <label className="form__label">First Name</label>
                    <input
                        className={this.extClass("fname").input}
                        type="text"
                        name="fname"
                        value={fname}
                        onChange={this.handleChange}
                    />
                    <p className={this.extClass("fname").errText}>
                        {formErrs.fname}
                    </p>
                </div>
                {/* Last Name */}
                <div className="form__item half">
                    <label className="form__label">Last Name</label>
                    <input
                        className={this.extClass("lname").input}
                        type="text"
                        name="lname"
                        value={lname}
                        onChange={this.handleChange}
                    />
                    <p className={this.extClass("lname").errText}>
                        {formErrs.lname}
                    </p>
                </div>
                {/* Email */}
                <div className="form__item">
                    <label className="form__label">Email</label>
                    <input
                        className={this.extClass("email").input}
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <p className={this.extClass("email").errText}>
                        {formErrs.email}
                    </p>
                </div>
                {/* Password */}
                <div className="form__item">
                    <label className="form__label">Password</label>
                    <input
                        className={this.extClass("password").input}
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <p className={this.extClass("password").errText}>
                        {formErrs.password}
                    </p>
                </div>
                {/* Submit Button */}
                <input type="submit" value="Create Account" className="btn" />
                {/* Link Text */}
                <p className="form__text">
                    Already have an account? <Link to="/signin">Sign in</Link>
                </p>
            </form>
        );

        return formComp;
    }
}

export default Signup;
