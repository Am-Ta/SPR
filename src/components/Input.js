import React from "react";

/*
@params props{object}
*/
function Input(props) {
    const label = props.label,
        type = props.type,
        name = props.name;

    const inputComp = (
        <div className="createAccForm__item">
            <label className="createAccForm__label">{label}</label>
            <input
                className="createAccForm__info"
                type={type}
                name={name}
                onChange={props.handleChange}
            />
        </div>
    );

    return inputComp;
}

export default Input;
