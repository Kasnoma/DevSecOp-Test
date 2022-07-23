import * as React from "react";
import { useField } from "formik";
import "./checkbox.css";

type Props = {
  children: React.ReactNode;
  type: string;
  name: string;
  required?: boolean;
};

export const Checkbox: React.FC<Props> = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <span className="bg-danger">{meta.error}</span>
      ) : null}
    </>
  );
};

