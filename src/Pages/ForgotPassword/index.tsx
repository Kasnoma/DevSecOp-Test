import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CenteredLogo } from "../../Components/CenteredLogo";
import { TextInput } from "../../Components/TextInput";
import { Button } from "../../Components/Button";
import { useNavigate } from "react-router-dom";

import "./forgotpassword.css";

export const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <CenteredLogo />
      <div className="splash">
        <div className="form">
          <h2>Password Reset</h2>
          <p className="subtitle mb-2 pb-2">
            Reset your password to continue trading on ComX
          </p>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Please enter a valid email address")
                .required("Email is required"),
            })}
            onSubmit={handleSubmit}
          >
            <Form>
              <TextInput
                label="Enter the email address you registered with"
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                autoComplete="email"
              />
              <p className="muted ">
                Note that you will be sent an OTP to the email address provided
              </p>
              <div className="form__buttons">
                <Button
                  type="button"
                  text="Back"
                  onClick={() => navigate(-1)}
                  className="btn-clear"
                />

                <Button
                  type="submit"
                  text="Proceed"
                  className="btn-clear text-danger"
                  onClick={() => navigate("otp-validation")}
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

