import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Sites/home.js";
import Test from "./Sites/projects";
import Layout from "./Sites/layout.js";
import NoPage from "./Sites/noPage.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



