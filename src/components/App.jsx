import { Route, Routes } from "react-router-dom";
import { Movies } from "./Movies/Movies";
import { Layout } from "./Layout";
import { Home } from "./Home/Home";





export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<div>movieId</div>}></Route>
          </Route>
        </Route>
    </Routes>
  );
};
