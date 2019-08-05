import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 *Input component
 *
 * @class Input
 * @extends {Component}
 */
class Input extends Component {
    /**
     *Creates an instance of Input.
     * @param {object} props
     * @memberof Input
     */
    constructor(props) {
        super(props);
    }

    /**
     *extract the suitable class
     *
     * @returns
     * @memberof Input
     */
    extractClass = () => {
        let classNameInput = "createAccForm__info";
        let classNameErrText = "createAccForm__errText";

        const { name } = this.props;
        const errValue = this.props.errValue[name];

        const errValueLen = errValue === null ? null : errValue.length;

        switch (true) {
            case null:
                break;
            case errValueLen === 0:
                classNameInput += " success";
                break;
            case errValueLen > 0:
                classNameInput += " error";
                classNameErrText += " createAccForm__errText_show";
                break;
        }

        return { classNameInput, classNameErrText };
    };

    /**
     *renders the input component
     *
     * @returns
     * @memberof Input
     */
    render() {
        const { label, type, name, value } = this.props;
        const errValue = this.props.errValue[name];

        const inputComp = (
            <div className="createAccForm__item">
                <label className="createAccForm__label">{label}</label>
                <input
                    className={this.extractClass().classNameInput}
                    type={type}
                    name={name}
                    onChange={this.props.handleChange}
                    value={value}
                />
                <p className={this.extractClass().classNameErrText}>
                    {errValue}
                </p>
            </div>
        );

        return inputComp;
    }
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    errValue: PropTypes.object.isRequired
};

export default Input;
