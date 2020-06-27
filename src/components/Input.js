import React, { Fragment } from "react";

export default function Input({
  label,
  id,
  type,
  min,
  max,
  step,
  value,
  onChange,
}) {
  return (
    <Fragment>
      <input
        id={id}
        type={type}
        min={min || null}
        max={max || null}
        step={step || null}
        value={value}
        onChange={onChange}
        className="validate"
      />
      <label htmlFor={id} className="active">
        {`${label}:`}
      </label>
    </Fragment>
  );
}
