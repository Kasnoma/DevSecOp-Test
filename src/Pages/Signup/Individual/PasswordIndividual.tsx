import * as React from "react";
import { Formik, Form } from "formik";

import { useAppSelector } from "../../../hooks";

import * as Yup from "yup";
import { TextInput } from "../../../Components/TextInput";
import { Button } from "../../../Components/Button";
import { TRootState } from "../../../store";
import { TProps } from "../";

// Save State to Redux
export const IndividualPassword: React.FC<TProps> = ({
  nextStep,
  fillForm,
}) => {
  const individual = useAppSelector(
    (state: TRootState) => state.FormIndividualSignup
  );
  return (
    <Formik
      enableReinitialize
      initialValues={{ ...individual }}
      validationSchema={Yup.object({
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters")
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
        phone: Yup.string()
          .required("Please enter a phone number")
          .min(8, "Phone Number must be at least 8 digits")
          .max(12, "Phone Number must be at most 12 digits")
          .matches(/^\d+$/, "Phone number must be only digits"),
      })}
      onSubmit={(values) => {
        fillForm?.(values);
        nextStep();
      }}
    >
      <Form>
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
        <TextInput
          placeholder="Enter Your Phone Number"
          type="tel"
          id="phone"
          name="phone"
          label="Phone Number"
          autoComplete="tel"
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

