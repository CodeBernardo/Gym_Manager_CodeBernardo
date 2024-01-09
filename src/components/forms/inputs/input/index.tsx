import { InputHTMLAttributes, forwardRef } from "react";
import React from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...rest} ref={ref} />
      </>
    );
  }
);

export { Input };
