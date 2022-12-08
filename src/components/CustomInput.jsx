import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      maxLength={props.maxLength}
      min={props.min}
      max={props.max}
      minLength={props.minLength}
      className={props.className}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}

export default Input;
