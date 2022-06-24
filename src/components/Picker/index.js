import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useField, useFormikContext } from "formik";
import moment from "moment";

const Picker = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <DatePicker
    {...field}
    {...props}
    selected={(field.value && new Date(field.value)) || null}
    onChange={value => {
      setFieldValue(field.name, value);
    }}
  />
  );
};

export default Picker;
