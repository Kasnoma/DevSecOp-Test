import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TProps } from "..";
import { useAppSelector } from "../../../hooks";
import { TextInput } from "../../../Components/TextInput";
import { Select } from "../../../Components/Select";
import { DateFormPicker } from "../../../Components/DateFormPicker";
import { Button } from "../../../Components/Button";
import { TRootState } from "../../../store";

export const CorporateDetails: React.FC<TProps> = ({ nextStep, fillForm }) => {
  const corporate = useAppSelector(
    (state: TRootState) => state.FormCorporateSignup
  );
  const businesses = [
    {
      value: "agriculture",
      label: "Agriculture",
    },
    {
      value: "aviation",
      label: "Aviation",
    },
    {
      value: "agriculture",
      label: "Agriculture",
    },
    {
      value: "Agriculture",
      label: "Agriculture",
    },
  ];
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
        fillForm?.(values);
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
          <Select
            options={businesses}
            id="typeOfBusiness"
            name="typeOfBusiness"
            label="Type of Business"
          />
          <DateFormPicker
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

