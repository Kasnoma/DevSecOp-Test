import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button";
import { CenteredLogo } from "../../Components/CenteredLogo";
import { TextInput } from "../../Components/TextInput";
import { Checkbox } from "../../Components/Checkbox";

type Props = {};

export const Signin: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/dashboard/market/order-book");
  };

  return (
    <>
      <CenteredLogo />
      <div className="splash">
        <div className="form">
          <h2>Sign in to ComX</h2>
          <p>Enter your login credentials below</p>
          <Formik
            initialValues={{
              email: "",
              password: "",
              rememberMe: false,
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Please enter a valid email address")
                .required("Email is required"),
              password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
              rememberMe: Yup.boolean(),
            })}
            onSubmit={handleSubmit}
          >
            <Form>
              <TextInput
                name="email"
                label="Your Email"
                type="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
              <TextInput
                name="password"
                label="Your Password"
                type="password"
                id="password"
                placeholder="xxxxxxxx"
                autoComplete="current-password"
              />
              <div className="form__group">
                <Checkbox type="checkbox" name="rememberMe" required>
                  Stay Signed in
                </Checkbox>

                <Link to="password-reset" className="text-danger">
                  Forgot Password?
                </Link>
              </div>
              <Button
                text="Sign in"
                type="submit"
                className="btn-success mt-3"
              />
              <Button
                text="Back"
                type="button"
                className=" mt-1"
                onClick={() => navigate("/welcome")}
              />
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

