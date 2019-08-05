import React, { Component } from "react";
import { Link } from "react-router-dom";

/**
 *Signin component
 *
 * @class Signin
 * @extends {Component}
 */
class Signin extends Component {
    /**
     *Creates an instance of Signin.
     * @param {object} props
     * @memberof Signin
     */
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    /**
     *handles the changes on input elements and then changes the state
     *
     * @param {object} event (event object for inputs element)
     * @memberof Signin
     */
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    /**
     *handles the sumbit in form element and then reset the state to default values
     *
     * @param {object} event (event object for form element)
     * @memberof Signin
     */
    handleSubmit = event => {
        event.preventDefault();

        if (this.validationToSubmit()) {
            console.log(`
                --SUBMITTING--
                EMAIL   : ${this.state.email}
                PASSWORD: ${this.state.password}
            `);

            this.setState({
                email: "",
                password: ""
            });
        } else {
            console.error("DISPLAY ERROR - PLEASE FILL THE FIELDS");
        }
    };

    /**
     *evaluates the value to must be submitted
     *
     * @returns
     * @memberof Signin
     */
    validationToSubmit = () => {
        let result = true;

        Object.values(this.state).forEach(value => {
            if (value === "") {
                result = false;
            }
        });

        return result;
    };

    /**
     *renders the signin component
     *
     * @returns
     * @memberof Signin
     */
    render() {
        const { email, password } = this.state;

        const signinComp = (
            <form className="form" onSubmit={this.handleSubmit}>
                {/* Email */}
                <div className="form__item">
                    <label className="form__label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form__info"
                        value={email}
                        onChange={this.handleChange}
                    />
                </div>
                {/* Password */}
                <div className="form__item">
                    <label className="form__label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form__info"
                        value={password}
                        onChange={this.handleChange}
                    />
                </div>
                {/* Submit button */}
                <input type="submit" value="Sign in" className="btn" />
                {/* Form Text */}
                <p className="form__text">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        );

        return signinComp;
    }
}

export default Signin;
