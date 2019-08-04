import React, { Component } from "react";

/**
 * Input component
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
     * extract the suitable class
     *
     * @returns
     * @memberof Input
     */
    extractClass = () => {
        let classNameInput = "createAccForm__info";
        let classNameErrText = "createAccForm__errText";

        const { errValue } = this.props;
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
     * render the form component
     *
     * @returns
     * @memberof Input
     */
    render() {
        const { label, type, name, value, errValue } = this.props;

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

export default Input;
