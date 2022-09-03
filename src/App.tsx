import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./cpmponents/navbar/navbar";
import { Dialog } from "./cpmponents/page/dialog/dialog";
import { Main } from "./cpmponents/page/main/main";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/dialog" element={<Dialog />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
