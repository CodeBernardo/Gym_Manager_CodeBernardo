import { ForwardedRef, forwardRef } from "react";
import { InputProps } from "../../../interfaces";

const Input = forwardRef(
  ({ label, id, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...rest} ref={ref} />
        {/* {error && <small>{error.message}</small>} */}
      </div>
    );
  },
);

export { Input };
