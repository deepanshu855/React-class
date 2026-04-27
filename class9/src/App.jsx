import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import MenProduct from "./pages/MenProduct";
import WomenProduct from "./pages/WomenProduct";
import AnyCourse from "./pages/AnyCourse";
import PageNotFound from "./pages/PageNotFound";
import AllCourses from "./pages/AllCourses";

const App = () => {
  return (
    <div className="bg-black h-screen text-white overflow-hidden">
      <Navbar />
      <Routes>
        {/* Static Routes  */}
        <Route path="/home" element={<Home />} />
        {/* <Route path='/product' element={<Product />}/> */}
        <Route path="/about" element={<About />} />
        {/* <Route path='/courses' element={<Courses />}/> */}

        {/* Nested Routes  */}
        {/* <Route path="/product/men" element={<MenProduct />} />
        <Route path="/product/women" element={<WomenProduct />} /> */}

        {/* Dynamic Routes  */}
        {/* <Route path='/courses/:courseId' element={<AnyCourse/>}/> */}

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />

        {/* Better way to write nested routes */}
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/courses/:courseId" element={<AnyCourse />} />
        </Route>

        <Route path="/product" element={<Product />}>
          <Route path="/product/men" element={<MenProduct />} />
          <Route path="/product/women" element={<WomenProduct />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
