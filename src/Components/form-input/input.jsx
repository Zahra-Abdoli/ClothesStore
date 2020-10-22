import React from "react";
import "./input.scss";
const Input = ({ handlechange, label, ...props }) => (
  <div className="group">
    <input className="form-input" onChange={handlechange} {...props} />
    {label ? (
      <label
        className={`${props.value.length ? "shrink" : ""} 'form-input-label' `}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default Input;
