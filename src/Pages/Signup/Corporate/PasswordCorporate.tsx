import * as React from "react";
import { Formik, Form } from "formik";
import { TProps } from "..";
import { useAppSelector } from "../../../hooks";

import * as Yup from "yup";
import { TextInput } from "../../../Components/TextInput";
import { Button } from "../../../Components/Button";
import { TRootState } from "../../../store";

export const CorporatePassword: React.FC<TProps> = ({ nextStep, fillForm }) => {
  const corporate = useAppSelector(
    (state: TRootState) => state.FormCorporateSignup
  );
  return (
    <Formik
      enableReinitialize
      initialValues={{ ...corporate }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Please enter a valid email")
          .required("Email is required"),
        password: Yup.string()
          .required("Password is required")
          .matches(
            /[a-z]/,
            "Password must contain at least one lowercase letter"
          )
          .matches(
            /[A-Z]/,
            "Password must contain at least one uppercase letter"
          )
          .matches(/[0-9]/, "Password must contain at least one number"),
        confirmPassword: Yup.string()
          .required("Passwords do not match")
          .oneOf([Yup.ref("password"), null], "Passwords do not match"),
      })}
      onSubmit={(values) => {
        console.log(corporate);
        fillForm?.(values);
        nextStep();
      }}
    >
      <Form>
        <TextInput
          placeholder="Enter Company Email"
          type="email"
          id="email"
          name="email"
          label="Company Email"
          autoComplete="email"
        />
        <TextInput
          placeholder="Enter Password"
          type="password"
          id="password"
          name="password"
          label="Password"
        />
        <TextInput
          placeholder="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
        />

        <Button
          type="submit"
          text="VERIFY ACCOUNT"
          className="btn-clear text-danger"
        />
      </Form>
    </Formik>
  );
};

