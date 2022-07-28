import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { CenteredLogo } from "../../Components/CenteredLogo";
import { Button } from "../../Components/Button";
import { TextInput } from "../../Components/TextInput";

export const OTPValidation: React.FC = () => {
  const navigate = useNavigate();

  const resend_code = () => {
    console.log("resend code");
  };

  const handleSubmit = (values: any) => {
    navigate("/sign-in");
  };
  return (
    <>
      <CenteredLogo />
      <div className="splash">
        <div className="form">
          <h2>Password Reset</h2>
          <p className="subtitle">
            Reset your password to continue trading on Com X
          </p>

          <Formik
            initialValues={{ otp: "" }}
            validationSchema={Yup.object({
              otp: Yup.string().required("OTP is required"),
            })}
            onSubmit={handleSubmit}
          >
            <Form>
              <TextInput
                label="Enter the otp sent to your email"
                type="text"
                placeholder="Enter your code"
                id="otp"
                name="otp"
                autoComplete="otp"
              />
              <p
                className="muted"
                onClick={resend_code}
                style={{ cursor: "pointer" }}
              >
                Rescend code
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
                  text="Finish"
                  className="btn-clear text-danger"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

