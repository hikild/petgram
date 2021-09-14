import React from 'react'
import '../forms/forms.scss';

function Input({label, type, name }) {
    return (
        <div className="wrapper">
            <label className="label" htmlFor={name}>{label}</label>
            <input className="input" type={type} id={name} />
            <p className="error">Error</p>
        </div>
    )
}

export default Input
