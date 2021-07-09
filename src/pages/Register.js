import axios from "axios";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TextField from "../components/TextField";

const Register = () => {
  const history = useHistory();
  const [state, setState] = useState({
    successMessage: "",
    errorMessage: "",
  });

  return (
    <div className="h-screen w-screen bg-blue-700 flex items-center justify-center">
      <div className="w-72 h-60h bg-blue-600 mx-3 md:mx-0 text-center rounded  shadow-lg">
        <h1 className="font-bold my-3 capitalize text-lg">Register</h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            phone: "",
          }}
          validate={(values) => {
            const errors = {};
            !values.name && (errors.name = "Name is required");
            !values.email && (errors.email = "Email is required");
            !values.password && (errors.password = "Password is required");
            !values.password_confirmation &&
              (errors.password_confirmation = "Confirm Password is required");

            !values.phone && (errors.phone = "Phone Password is required");

            return errors;
          }}
          onSubmit={async (values, { setErrors }) => {
            if (values.password !== values.password_confirmation) {
              return setState({
                ...state,
                errorMessage: "Password didn't match",
              });
            }
            try {
              let res = await axios.post(
                "https://backend.imentalhealth.net/api/register/student",
                values
              );

              if (res.data.data) {
                setState({ ...state, successMessage: res.data.message });

                setTimeout(() => {
                  history.push("/login");
                }, 1000);
              }
            } catch (err) {
              setState({
                ...state,
                errorMessage: "The email has already been taken.",
              });
            }
          }}
        >
          {({ values, isSubmitting, errors }) => (
            <>
              <div>
                <ul>
                  <div className="px-6">
                    {state.successMessage && (
                      <li className="bg-blue-700 text-gray-300 rounded-lg my-2">
                        {state.successMessage}
                      </li>
                    )}
                    {state.errorMessage && (
                      <li className="bg-red-700 text-gray-300 rounded-lg my-2">
                        {state.errorMessage}
                      </li>
                    )}
                  </div>
                </ul>
              </div>
              <Form
                onClick={() => {
                  setState({ ...state, successMessage: "", errorMessage: "" });
                }}
              >
                {/* Name */}
                <div className="my-3">
                  <TextField
                    name="name"
                    type="text"
                    placeholder="Name"
                    label="Name"
                  />
                </div>
                {/* Email */}
                <div className="my-3">
                  <TextField
                    name="email"
                    type="email"
                    placeholder="Email"
                    label="Email"
                  />
                </div>
                {/* Password */}
                <div className="my-3">
                  <TextField
                    name="password"
                    type="password"
                    placeholder="Password"
                    label="Password"
                  />
                </div>
                {/* Confirm Password */}
                <div className="my-3">
                  <TextField
                    name="password_confirmation"
                    type="password"
                    placeholder="Confirm Password"
                    label="Confirm Password"
                  />
                </div>
                {/* Phone */}
                <div className="my-3">
                  <TextField
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    label="Phone Number"
                  />
                </div>

                <div>
                  <p className="font-medium text-gray-900 ">
                    <Link to="/login">already have an account?</Link>
                  </p>
                  <button
                    className="capitalize font-normal border rounded bg-blue-700 px-3 py-1 mt-3 focus:outline-none text-white my-2"
                    type="submit"
                  >
                    <div className="flex">
                      {isSubmitting && (
                        <div className="h-5 w-5 rounded-full border-dotted border-2  border-white animate-spin ease-linear mr-3"></div>
                      )}
                      <p>Register</p>
                    </div>
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
