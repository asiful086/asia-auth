import axios from "axios";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import TextField from "../components/TextField";
import { login } from "../store/action/userAction";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    successMessage: "",
    errorMessage: "",
  });

  return (
    <div className="h-screen w-screen bg-blue-700 flex items-center justify-center">
      <div className="w-72 h-60h bg-blue-600 mx-3 md:mx-0 text-center rounded  shadow-lg">
        <h1 className="font-bold my-3 capitalize text-lg">Login</h1>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            !values.email && (errors.email = "Email is required");
            !values.password && (errors.password = "Password is required");

            return errors;
          }}
          onSubmit={async (values) => {
            try {
              let res = await axios.post(
                "https://backend.imentalhealth.net/api/login/student",
                values
              );
              // console.log(res.data.data);
              if (res.data.data) {
                dispatch(login(res.data.data));

                setState({ ...state, successMessage: res.data.message });

                setTimeout(() => {
                  history.push("/");
                }, 1000);
              }
            } catch (err) {
              setState({
                ...state,
                errorMessage: "Wrong credentials!",
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

                <div>
                  <p className="font-medium text-gray-900 ">
                    <Link to="/register">don't have an account?</Link>
                  </p>
                  <button
                    className="capitalize font-normal border rounded bg-blue-700 px-3 py-1 mt-3 focus:outline-none text-white my-2"
                    type="submit"
                  >
                    <div className="flex">
                      {isSubmitting && (
                        <div className="h-5 w-5 rounded-full border-dotted border-2  border-white animate-spin ease-linear mr-3"></div>
                      )}
                      <p>Login</p>
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

export default Login;
