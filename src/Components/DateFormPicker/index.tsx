import * as React from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  label: string;
  name: string;
  id: string;
};

export const DateFormPicker: React.FC<Props> = (props) => {
  const [field, meta, { setValue }] = useField(props);
  return (
    <div className="input__group">
      <label htmlFor={props.name || props.id} className="form__label">
        {props.label}
      </label>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val: any) => {
          setValue(val);
        }}
        className="form__input"
      />
      {meta.touched && meta.error ? (
        <span className="text-danger">{meta.error}</span>
      ) : null}
    </div>
  );
};

