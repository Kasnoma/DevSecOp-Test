import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TProps } from "../";
import { TextInput } from "../../../Components/TextInput";
import { Button } from "../../../Components/Button";
import { useAppSelector } from "../../../hooks";
import { TRootState } from "../../../store";

export const IndividualVerifyAccount: React.FC<TProps> = ({
  nextStep,
  prevStep,
}) => {
  const individual = useAppSelector(
    (state: TRootState) => state.FormIndividualSignup
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
        console.log(individual);
        console.log(values);
        nextStep();
      }}
    >
      <Form>
        <TextInput
          label={`Enter the 4 digit code that was sent to {individual.phone} and {individual.email}`}
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

