import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Show from "./pages/Show";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Search />}></Route>
        <Route path={"/show/:id"} element={<Show />}></Route>
      </Routes>
    </>
  );
}

export default App;
