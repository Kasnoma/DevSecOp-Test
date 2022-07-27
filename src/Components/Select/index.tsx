import * as React from "react";
import { useField } from "formik";

type Props = {
  options: Option[];
  label: string;
  id: string;
  name: string;
};

interface Option {
  value: string;
  label: string;
}

export const Select: React.FC<Props> = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className="input__group">
      <label htmlFor={props.name || props.id} className="form__label">
        {props.label}{" "}
      </label>
      <select {...field} {...props} className="form__input">
        {props.options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {meta.touched && meta.error ? (
        <span className="text-danger">{meta.error}</span>
      ) : null}
    </div>
  );
};

