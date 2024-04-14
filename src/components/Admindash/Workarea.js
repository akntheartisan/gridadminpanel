import React from "react";
import { Routes, Route } from "react-router-dom";
import Table from "./Table";
import Form from "./Form";
import Gallery from "./Gallery";

const Workarea = () => {
  return (
    <div className="workspace">
      <Routes>
        <Route path="/table" element={<Table />} />
        <Route path="/form" element={<Form />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default Workarea;
