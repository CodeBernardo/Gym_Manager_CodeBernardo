import { SelectHTMLAttributes, forwardRef } from "react";
import React from "react";

type SelectOpt = {
  value: string;
  label: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: SelectOpt[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, id, options, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <select {...rest} ref={ref}>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}l
              </option>
            );
          })}
        </select>
      </>
    );
  },
);

export { Select };
export type { SelectOpt };
