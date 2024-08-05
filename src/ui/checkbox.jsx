import '../assets/styles/check.css';
import React from 'react';

const Checkbox = ({ id, name, checked, value, label }) => {
    return (
        <div className="checkbox-container">
            <input
                type="checkbox"
                id={id}
                className="checkbox"
                name={name}
                checked={checked}
                value={value}
                disabled
            />
            <label htmlFor={id} className="checkbox-label">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;