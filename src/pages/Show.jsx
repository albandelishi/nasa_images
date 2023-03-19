import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
export default function Show() {
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const itemImage = JSON.parse(localStorage.getItem("item"));
    setItem(itemImage);
  }, []);

  return (
    <>
      <MainLayout>
        {item && item.data.length > 0 && (
          <section className="py-5">
            <div className="container px-5 my-5">
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-6">
                  <div className="text-center mb-5">
                    <h1 className="fw-bolder">
                      Project Title: {item.data[0].title}
                    </h1>
                    <img
                      className="img-fluid rounded-3 mb-5"
                      src={item.links[0].href}
                      alt={item.data[0].title}
                    />
                    <p className="lead fw-normal text-muted mb-0">
                      {item.links[0].description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-6">
                  <div className="mb-5">
                    <h2 className="lead fw-normal">
                      Location: {item.data[0].location ?? ""}
                    </h2>
                    <h2 className="lead fw-normal">
                      Photographer name:
                      {item.data[0].photographer ??
                        item.data[0].secondary_creator ??
                        ""}
                    </h2>
                    <h3 className="lead fw-normal">
                      Keywords:
                      {item.data[0].keywords.length > 0 &&
                        item.data[0].keywords.map((keyword, index) => {
                          return <span key={index}>{keyword} </span>;
                        })}
                    </h3>
                    <h3 className="lead fw-normal">
                      Date:
                      {new Date(item.data[0].date_created).toLocaleString(
                        "en-us"
                      )}
                    </h3>
                    <button
                      className="btn btn-primary mt-5"
                      onClick={() => navigate(-1)}>
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </MainLayout>
    </>
  );
}
