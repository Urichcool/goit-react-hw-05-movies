import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="movies" element={<div></div>} />
      </Route>
    </Routes>
  );
};
