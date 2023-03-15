import { useState } from "react";
import { Formik, Field, Form } from "formik";
import DatePicker from "react-datepicker";
import { searchForm } from "../utils/validation/yupValidation";
import "react-datepicker/dist/react-datepicker.css";
import Alert from "./alert/Alert";
export default function SearchSection() {
  const [startYear, setStartYear] = useState(new Date());
  const [endYear, setEndYear] = useState(new Date());
  return (
    <>
      <section className="bg-dark py-5">
        <div className="container-fluid px-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <Formik
                initialValues={{ search: "", startYear: "", endYear: "" }}
                validationSchema={searchForm}
                onSubmit={async (values) => {
                  await new Promise((resolve) => setTimeout(resolve, 500));
                  alert(JSON.stringify(values, null, 2));
                }}>
                {({ errors, touched }) => (
                  console.log(errors),
                  (
                    <Form>
                      <div className="mb-3 text-white">
                        <label htmlFor="search" className="form-label">
                          Search
                        </label>
                        <Field
                          name="search"
                          id="search"
                          className="form-control"
                          placeholder="Orion"
                          type="text"
                        />
                        {errors.search && touched.search && (
                          <Alert message={errors.search} />
                        )}
                      </div>
                      <div className="row text-white">
                        <div className="col-6">
                          <label htmlFor="startYear">Start Year</label>
                          <DatePicker
                            selected={startYear}
                            name="startYear"
                            id="startYear"
                            className="form-control"
                            onChange={(date) => {
                              setStartYear(date);
                            }}
                            showYearPicker
                            dateFormat="yyyy"
                          />
                          {errors.startYear && touched.startYear && (
                            <Alert message={errors.startYear} />
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="endYear">End Year</label>
                          <DatePicker
                            selected={endYear}
                            name="endYear"
                            id="endYear"
                            className="form-control"
                            onChange={(date) => {
                              setEndYear(date);
                            }}
                            showYearPicker
                            dateFormat="yyyy"
                          />
                          {errors.endYear && touched.endYear && (
                            <Alert message={errors.endYear} />
                          )}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        <button
                          className="btn btn-primary btn-lg "
                          type="submit">
                          Search
                        </button>
                      </div>
                    </Form>
                  )
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
