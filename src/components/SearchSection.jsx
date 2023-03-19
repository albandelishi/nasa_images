import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";

import Alert from "./alert/Alert";
import SearchResults from "./SearchResults";
import DatePickerFormik from "./input/DatePickerFormik";
import Pagination from "./pagination/Pagination";

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
                        data-testid="input-search"
                      />
                      {errors.search && touched.search && (
                        <Alert message={errors.search} />
                      )}
                    </div>
                    <div className="row text-white">
                      <div className="col-sm-12 col-md-6 mb-3">
                        <label htmlFor="startYear">Start Year</label>
                        <DatePickerFormik name="startYear" showYearPicker />
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <label htmlFor="endYear">End Year</label>
                        <DatePickerFormik name="endYear" showYearPicker />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <button
                        className="btn btn-primary btn-lg "
                        type="submit"
                        data-testid="submit-form">
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
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currentPage={currentPage}
        TOTAL_PAGES={TOTAL_PAGES}
      />
    </>
  );
}
