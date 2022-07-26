import * as React from "react";
import { Formik, Form } from "formik";
import { useAppSelector } from "../../../hooks";
import * as Yup from "yup";
import { TextInput } from "../../../Components/TextInput";
import { Button } from "../../../Components/Button";
import { TRootState } from "../../../store";

import { TProps } from "../";

// Save State to Redux
export const IndividualDetails: React.FC<TProps> = ({ nextStep }) => {
  const individual = useAppSelector(
    (state: TRootState) => state.FormIndividualSignup
  );
  return (
    <Formik
      enableReinitialize
      initialValues={{ ...individual }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("First Name is required")
          .min(2, "First Name must be at least 2 characters")
          .matches(/^[a-zA-Z]+$/, "First Name must be letters only"),
        lastName: Yup.string()
          .required("Last Name is required")
          .min(2, "Last Name must be at least 2 characters")
          .matches(/^[a-zA-Z]+$/, "Last Name must be letters only"),
        email: Yup.string()
          .required("Email is required")
          .email("Please enter a valid email"),
      })}
      onSubmit={(values) => {
        // dispatch(individual(values));
        console.log(values);
        nextStep();
      }}
    >
      <Form>
        <div className="form__grid">
          <TextInput
            id="firstName"
            type="text"
            name="firstName"
            label="Your First Name"
            autoComplete="given-name"
            placeholder="Enter your First Name"
          />
          <TextInput
            id="lastName"
            type="text"
            name="lastName"
            label="Your Last Name"
            autoComplete="family-name"
            placeholder="Enter your Last Name"
          />
        </div>
        <TextInput
          id="email"
          type="email"
          name="email"
          label="Your Email"
          autoComplete="email"
          placeholder="Enter your Email"
        />

        <Button
          type="submit"
          text="NEXT STEP"
          className="btn-clear text-danger"
        />
      </Form>
    </Formik>
  );
};

