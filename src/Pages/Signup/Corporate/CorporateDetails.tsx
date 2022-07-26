import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TProps } from "..";
import { useAppSelector } from "../../../hooks";
import { TextInput } from "../../../Components/TextInput";
import { Button } from "../../../Components/Button";
import { TRootState } from "../../../store";

// Save State to Redux
export const CorporateDetails: React.FC<TProps> = ({ nextStep }) => {
  const corporate = useAppSelector(
    (state: TRootState) => state.FormCorporateSignup
  );
  return (
    <Formik
      initialValues={{ ...corporate }}
      validationSchema={Yup.object({
        companyName: Yup.string().required("Company Name is required"),
        typeOfBusiness: Yup.string().required("Type of Business is required"),
        dateOfIncorporation: Yup.string().required(
          "Date of Incorporation is required"
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        nextStep();
        setSubmitting(false);
      }}
    >
      <Form>
        <TextInput
          id="companyName"
          name="companyName"
          type="text"
          placeholder="Enter Company Name"
          label="Company Name"
        />

        <div className="form__grid">
          <TextInput
            placeholder="Select Type of Business"
            type="text"
            id="typeOfBusiness"
            name="typeOfBusiness"
            label="Type of Business"
          />
          <TextInput
            placeholder="Select Date"
            type="text"
            id="dateOfIncorporation"
            name="dateOfIncorporation"
            label="Date  of Incorporation"
          />
        </div>

        <Button
          type="submit"
          className="btn-clear text-danger"
          text="NEXT STEP"
        />
      </Form>
    </Formik>
  );
};

