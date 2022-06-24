import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Previous from "../../assets/previous.svg";
import StepProgres from "../../components/StepProgress";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Validation Schema.
const stepOneValidation = Yup.object().shape({
  firstName: Yup.string().required("First Name is requrired"),
  lastName: Yup.string().required("Last Name is requrired"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is requried"),
});

const StepOne = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState();

  const [state, setState] = useState({
    firstName: items?.firstName,
    lastName: items?.lastName,
    email: items?.email,
  });

  const handleSubmit = (values) => {
    console.log(values);
    localStorage.setItem("stepOne", JSON.stringify(values));
    navigate("/step-two");
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("stepOne"));
    if (items) {
      setState(items);
    }
  }, []);

  return (
    <>
      <div className="w-570 bottom-1 bg-white p-15 rounded-xl">
        <div className="grid grid-cols-3 gap-10 align-baseline items-center">
          <div className="">
            <div className="inline-flex">
              <img src={Previous} alt="PREVIOUS" />
              <div className="px-2" />
              <button
                type="button"
                className=" relative w-full flex justify-center text-sm font-medium rounded-md text-paleAqua"
                onClick={() => navigate(-1)}
              >
                Previuse
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <StepProgres count={1} percent={33} />
          </div>
        </div>
        <div className="pt-13" />
        <div className="flex flex-col justify-center text-center">
          <h2 className="font-bold text-2xl text-dark-light">Submit your</h2>
          <h2 className="font-bold text-2xl text-dark-light">
            personal Information
          </h2>
        </div>
        <div className="pt-13" />

        <div className="">
          <Formik
            initialValues={{ ...state }}
            initialForms={state}
            validationSchema={stepOneValidation}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form>
                <div className="grid grid-flow-row grid-cols-2 gap-8">
                  <div className="">
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      autoComplete="firstName"
                      className={` relative block w-full px-3 py-3 h-13 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm rounded-3xl  ${
                        errors.firstName ? `border-red-600` : ""
                      } `}
                      placeholder="First Name"
                      value={values.firstName || state.firstName}
                      defaultValue={state.firstName}
                      error={Boolean(touched.firstName && errors.firstName)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                    />
                    {errors.firstName ? (
                      <div className="mt-1 text-red-500 text-xs">
                        {errors.firstName}
                      </div>
                    ) : null}
                  </div>
                  <div className="">
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      autoComplete="lastName"
                      className={`  relative block w-full px-3 py-3 h-13 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm rounded-3xl   ${
                        errors.lastName ? "border-red-600" : ""
                      } `}
                      placeholder="Last Name"
                      required
                      value={values.lastName || state.lastName}
                      defaultValue={state.lastName}
                      error={Boolean(touched.lastName && errors.lastName)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.lastName ? (
                      <div className="mt-1 text-red-500 text-xs">
                        {errors.lastName}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="pt-11" />
                <div className="">
                  <div className="">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={` relative block w-full px-3 py-3 h-13 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm rounded-3xl  ${
                        errors.email ? "border-red-600" : ""
                      } `}
                      placeholder="E-mail"
                      required
                      value={values.email || state.email}
                      defaultValue={state.email}
                      error={Boolean(touched.email && errors.email)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.email ? (
                      <div className="mt-1 text-red-500 text-xs">
                        {errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="pt-24" />
                <div className="">
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Next →
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default StepOne;
