import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Previous from "../../assets/previous.svg";
import StepProgres from "../../components/StepProgress";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const stepThreeValidation = Yup.object().shape({
  company: Yup.string().required("Company is requrired"),
  position: Yup.string().required("Position is requrired"),
});

const StepThree = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState();

  console.log(" items ", items);

  const onHandleReset = () => {
    localStorage.clear();
    navigate("/step-one");
  };

  const [state, setState] = useState({
    company: items?.company,
    position: items?.position,
  });

  const handleSubmit = (values) => {
    console.log(values);
    localStorage.setItem("stepThree", JSON.stringify(values));
    navigate("/confirm");
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("stepThree"));
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
            <StepProgres count={3} percent={100} />
          </div>
          <div className="">
            <button
              type="button"
              className=" relative w-full flex justify-end text-base font-medium rounded-md text-primary"
              onClick={() => onHandleReset()}
            >
              Reset
            </button>
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
            validationSchema={stepThreeValidation}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form className="py-2">
                <div className="pt-11" />
                <div className="">
                  <div className="">
                    <input
                      id="company-name"
                      name="company"
                      type="text"
                      autoComplete="company"
                      placeholder="Company name"
                      className={` relative block w-full px-3 py-3 h-13 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm rounded-3xl first-letter:
                      ${errors.company ? `border-red-600` : ""}
                      
                      `}
                      value={values.company  || state.company}
                      defaultValue={state.company}
                      error={Boolean(touched.company && errors.company)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                    />
                    {errors.company ? (
                      <div className="mt-1 text-red-500 text-xs">
                        {errors.company}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="pt-7" />
                <div className="">
                  <div className="selector-input">
                    <label
                      for="position"
                      class="block mb-2 text-base text-paleAqua text-left "
                    >
                      Position
                    </label>

                    <select
                      id="countries"
                      name="position"
                      className={` bg-gray-50 border h-13 px-3 rounded-3xl border-gray-300 text-gray-900 text-sm  block w-full p-2.5  
                      ${errors.position ? `border-red-600` : ""}
                      
                      `}
                      value={values.position || state.position}
                      defaultValue={state.position}
                      error={Boolean(touched.position && errors.position)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                    >
                      <option value="One">Position One</option>
                      <option value="Two">Position Two</option>
                      <option value="Three">Position Three</option>
                    </select>
                    {errors.position ? (
                      <div className="mt-1 text-red-500 text-xs">
                        {errors.position}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="mt-7" />
                <div className="">
                  <div class="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-medium text-dark "
                    >
                      Receive Newsletters
                    </label>
                  </div>
                </div>
                <div className="pt-6" />
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

export default StepThree;
