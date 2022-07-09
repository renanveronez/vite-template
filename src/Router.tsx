import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Second } from "./Pages/Second";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second" element={<Second />} />
    </Routes>
  )
}