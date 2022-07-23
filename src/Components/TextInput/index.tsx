import * as React from "react";
import { useField } from "formik";
import "./textinput.css";

type Props = {
  label: string;
  value?: string;
  name: string;
  type: string;
  id: string;
  placeholder?: string;
  autoComplete?: string;
};

export const TextInput: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input__group">
      <label htmlFor={props.name || props.id} className="form__label">
        {label}
      </label>
      <input {...field} {...props} className="form__input" />
      {meta.touched && meta.error ? (
        <span className="text-danger">{meta.error}</span>
      ) : null}
    </div>
  );
};

