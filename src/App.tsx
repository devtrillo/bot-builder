import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LazyAuthenticate from "@/screens/Authenticate";
import LazyError404 from "@/screens/Error404";
import LazyHome from "@/screens/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LazyHome />} path="/" />
        <Route element={<LazyAuthenticate />} path="/authenticate" />
        <Route element={<LazyError404 />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
