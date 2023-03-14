import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Formik, Field, Form } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { searchForm } from "../utils/validation/yupValidation";
export default function Search() {
  const [startYear, setStartYear] = useState(new Date());
  const [endYear, setEndYear] = useState(new Date());
  return (
    <>
      <MainLayout>
        <section className="bg-dark py-5">
          <div className="container-fluid px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-8 col-xl-7 col-xxl-6">
                <Formik
                  initialValues={{ search: "", startYear: "", endYear: "" }}
                  validationSchema={searchForm}
                  onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                  }}>
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
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <button className="btn btn-primary btn-lg " type="submit">
                        Search
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}