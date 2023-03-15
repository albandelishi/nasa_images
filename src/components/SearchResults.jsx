import React from "react";
import Card from "./cards/Card";
export default function SearchResults({ items }) {
  return (
    <>
      <section className="py-5">
        <div className="container p-5">
          <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
            {(!items || items.length === 0) && "No results"}
            {items &&
              items.map((item, index) => {
                return (
                  <Card
                    key={index}
                    imgSource={item.links[0].href}
                    imgAlt={item.data[0].title}
                    title={item.data[0].title}
                    location={item.data[0].location ?? ""}
                    photographerName={
                      item.data[0].photographer ??
                      item.data[0].secondary_creator ??
                      ""
                    }
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
