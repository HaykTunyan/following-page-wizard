import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Previous from "../../assets/previous.svg";
import Picker from "../../components/Picker";
import StepProgres from "../../components/StepProgress";

import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

// Validation Schema.
const stepTwoValidation = Yup.object().shape({
  gender: Yup.bool().required("Gender is requrired"),
  picker: Yup.string().required("Picker is requrired"),
});

const StepTwo = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState();

  console.log(" items ", items);

  const [state, setState] = useState({
    gender: items?.gender,
    picker: items?.picker,
  });

  const handleSubmit = (values) => {
    console.log(values);
    localStorage.setItem("stepTwo", JSON.stringify(values));
    navigate("/step-three");
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("stepTwo"));
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
            <StepProgres count={2} percent={66} />
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
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values }) => (
              <Form className="py-2">
                <p className="text-base text-left text-paleAqua">Gender</p>
                <div className="pt-2" />

                <div
                  role="group"
                  aria-labelledby="my-radio-group"
                  className="grid grid-flow-row grid-cols-2 gap-8"
                >
                  <div class="flex border-primary border-1px rounded-3xl p-3 items-center">
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="male"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        
                      />
                      <span className="pl-2">Male</span>
                    </label>
                  </div>
                  <div class="flex border-primary border-1px rounded-3xl p-3 items-center">
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="Female"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      />
                      <span className="pl-2">Female</span>
                    </label>
                  </div>
                </div>
                <div className="mt-6" />
                <div className="">
                  <label
                    for="position"
                    class="block mb-2 text-base text-paleAqua text-left "
                  >
                    Position
                  </label>
                  <div className="">
                    <Picker name="picker" />
                  </div>
                </div>
                <div className="pt-20" />
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

export default StepTwo;
