import React from "react";
import {
  BrowserRouter,
  Routes as RoutesV6,
  Route,
  useLocation
} from "react-router-dom";
import {DocumentPage} from "../pages/DocumentPage";

import { Home } from "../pages/Home";

export function Routes() {
  // const location = useLocation();
  // console.log({location})
  return (
    <BrowserRouter>
    <RoutesV6>
      <Route path="/" element={<Home />} />
      <Route path="/document" element={<DocumentPage />} />
    </RoutesV6>
  </BrowserRouter>

  );
}
