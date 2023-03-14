import React from "react";
import Card from "./cards/Card";
const data = [
  {
    imgSource: "https://source.unsplash.com/rDEOVtE7vOs/600x600",
    imgAlt: "Test",
    title: "Mars",
    location: "Planet",
    photographerName: "Nasa",
  },
  {
    imgSource: "https://source.unsplash.com/rDEOVtE7vOs/600x600",
    imgAlt: "Test",
    title: "Mars",
    location: "Planet",
    photographerName: "Nasa",
  },
  {
    imgSource: "https://source.unsplash.com/rDEOVtE7vOs/600x600",
    imgAlt: "Test",
    title: "Mars",
    location: "Planet",
    photographerName: "Nasa",
  },
  {
    imgSource: "https://source.unsplash.com/rDEOVtE7vOs/600x600",
    imgAlt: "Test",
    title: "Mars",
    location: "Planet",
    photographerName: "Nasa",
  },
  {
    imgSource: "https://source.unsplash.com/rDEOVtE7vOs/600x600",
    imgAlt: "Test",
    title: "Mars",
    location: "Planet",
    photographerName: "Nasa",
  },
  {
    imgSource: "https://source.unsplash.com/rDEOVtE7vOs/600x600",
    imgAlt: "Test",
    title: "Mars",
    location: "Planet",
    photographerName: "Nasa",
  },
];
export default function SearchResults() {
  return (
    <>
      <section className="py-5">
        <div className="container p-5">
          <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
            <Card
              imgSource="https://source.unsplash.com/rDEOVtE7vOs/600x600"
              imgAlt="Test"
              title="Mars"
              location="Planet"
              photographerName="Nasa"
            />
            <Card
              imgSource="https://source.unsplash.com/rDEOVtE7vOs/600x600"
              imgAlt="Test"
              title="Mars"
              location="Planet"
              photographerName="Nasa"
            />
            <Card
              imgSource="https://source.unsplash.com/rDEOVtE7vOs/600x600"
              imgAlt="Test"
              title="Mars"
              location="Planet"
              photographerName="Nasa"
            />
            <Card
              imgSource="https://source.unsplash.com/rDEOVtE7vOs/600x600"
              imgAlt="Test"
              title="Mars"
              location="Planet"
              photographerName="Nasa"
            />
            <Card
              imgSource="https://source.unsplash.com/rDEOVtE7vOs/600x600"
              imgAlt="Test"
              title="Mars"
              location="Planet"
              photographerName="Nasa"
            />
            <Card
              imgSource="https://source.unsplash.com/rDEOVtE7vOs/600x600"
              imgAlt="Test"
              title="Mars"
              location="Planet"
              photographerName="Nasa"
            />
            <Card
              imgSource="https://source.unsplash.com/rDEOVtE7vOs/600x600"
              imgAlt="Test"
              title="Mars"
              location="Planet"
              photographerName="Nasa"
            />
            <Card
              imgSource="https://source.unsplash.com/rDEOVtE7vOs/600x600"
              imgAlt="Test"
              title="Mars"
              location="Planet"
              photographerName="Nasa"
            />
          </div>
        </div>
      </section>
    </>
  );
}
