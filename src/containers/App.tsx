import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "./Home/Home";
import ProductPage from "../components/ProductPage/ProductPage";
import Register from "./Register/Register";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import { GlobalStyles } from "./../styles/GlobalStyles";

const App = () => {
  return (
    <MainLayout>
      <GlobalStyles />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products/:id" element={<ProductPage />}></Route>
      </Routes>
    </MainLayout>
  );
};

export default App;
