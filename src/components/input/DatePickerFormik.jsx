import { useField, useFormikContext } from "formik";
import { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import Alert from "../alert/Alert";

import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerFormik({ ...props }) {
  const [startDate, setStartDate] = useState(new Date());

  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  useEffect(() => {
    setFieldValue(field.name, startDate);
  }, [startDate]);
  return (
    <>
      <DatePicker
        id={field.name}
        className="form-control"
        dateFormat="yyyy"
        name={field.name}
        selected={startDate}
        onChange={(val) => {
          setStartDate(val);
          setFieldValue(field.name, val);
        }}
        {...props}
      />
      {meta.error && meta.touched && <Alert message={meta.error} />}
    </>
  );
}
