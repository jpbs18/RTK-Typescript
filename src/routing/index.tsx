import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";

const Cars = lazy((): Promise<any> => import("../pages").then(module => {
  return { default: module.Cars }
}))

const Gallery = lazy((): Promise<any> => import("../pages").then(module => {
  return { default: module.Gallery }
}))


const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/galery" element={<Gallery/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
