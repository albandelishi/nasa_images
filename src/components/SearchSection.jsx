import { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";

import Alert from "./alert/Alert";
import SearchResults from "./SearchResults";
import DatePickerFormik from "./input/DatePickerFormik";

import { fetchImages } from "../api/images";

import { searchForm } from "../utils/validation/yupValidation";

const PAGE_SIZE = 12;
const TOTAL_PAGES = Math.ceil(100 / PAGE_SIZE);
export default function SearchSection() {
  const [items, setItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    PAGE_SIZE,
    currentPage,
    search,
    startYear,
    endYear
  ) => {
    const data = await fetchImages(
      PAGE_SIZE,
      currentPage,
      search,
      startYear,
      endYear
    );
    if (data) setItems(data);
  };

  useEffect(() => {
    setLoading(true);
    fetchImages(PAGE_SIZE, currentPage).then((data) => {
      setItems(data);
    });
    setLoading(false);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <section className="bg-dark py-5">
        <div className="container-fluid px-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <Formik
                initialValues={{ search: "", startYear: "", endYear: "" }}
                validationSchema={searchForm}
                onSubmit={async ({ search, startYear, endYear }) => {
                  handleSubmit(
                    PAGE_SIZE,
                    currentPage,
                    search,
                    startYear,
                    endYear
                  );
                }}>
                {({ errors, touched }) => (
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
                        <DatePickerFormik name="startYear" showYearPicker />
                      </div>
                      <div className="col-6">
                        <label htmlFor="endYear">End Year</label>
                        <DatePickerFormik name="endYear" showYearPicker />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <button className="btn btn-primary btn-lg " type="submit">
                        Search
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      <SearchResults items={items} />
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary me-5"
          onClick={handlePrevPage}
          disabled={currentPage === 1}>
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={currentPage == TOTAL_PAGES}>
          Next
        </button>
      </div>
    </>
  );
}
