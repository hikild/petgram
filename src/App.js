// @ts-nocheck
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Login from "./components/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import React from "react";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header className="header" />
        <div className="body">
          <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/login/*" element={<Login />} />
          </Routes>
        </div>
        <Footer className="footer" />
      </BrowserRouter>
    </div>
  );
}

export default App;
