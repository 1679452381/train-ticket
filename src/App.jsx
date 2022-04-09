import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Order from "./pages/order";
import Query from "./pages/query";

export default function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/order"} element={<Order />} />
        <Route path={"/query"} element={<Query />} />
      </Routes>
    </BrowserRouter>
  );
}
