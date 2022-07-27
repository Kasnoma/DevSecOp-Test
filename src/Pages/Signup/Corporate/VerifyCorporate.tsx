import * as React from "react";
import { Formik, Form } from "formik";
import { TProps } from "..";
import * as Yup from "yup";
import { TextInput } from "../../../Components/TextInput";
import { Button } from "../../../Components/Button";

import { TRootState } from "../../../store";
import { useAppSelector } from "../../../hooks";

export const CorporateVerifyAccount: React.FC<TProps> = ({
  nextStep,
  prevStep,
}) => {
  const corporate = useAppSelector(
    (state: TRootState) => state.FormCorporateSignup
  );
  return (
    <Formik
      initialValues={{ code: "" }}
      validationSchema={Yup.object({
        code: Yup.string()
          .required("Please enter a code")
          .length(4, "Please enter a valid code"),
      })}
      onSubmit={(values) => {
        console.log(values);
        console.log(corporate);
        nextStep();
      }}
    >
      <Form>
        <TextInput
          label={`Enter the 4 digit code that was sent to {corporate.email}`}
          id="code"
          placeholder="Enter code"
          name="code"
          type="text"
        />
        <div className="form__buttons">
          <Button type="button" text="BACK" onClick={prevStep} />
          <Button type="submit" text="NEXT" className="text-danger" />
        </div>
      </Form>
    </Formik>
  );
};

