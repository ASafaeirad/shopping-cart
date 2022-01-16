import { lazy, useEffect } from "react";
import { Route, Navigate, Routes } from "react-router";
import { useGetUser } from "../api/useGetUser";
import { AuthLayout } from "../components/MainLayout";
import { useAuthStore } from "../stores/store";
import { decodedToken } from "./../utils/decoded";

const ProductPage = lazy(() => import("../components/ProductPage/ProductPage"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const Products = lazy(() => import("./Products/Products"));
const Contact = lazy(() => import("./Contact/Contact"));
const About = lazy(() => import("./About/About"));
const Cart = lazy(() => import("./Cart/Cart"));
const Home = lazy(() => import("./Home/Home"));
const Login = lazy(() => import("./Login/LoginPage"));
const Register = lazy(() => import("./Register/Register"));

const App = () => {
  const logout = useAuthStore((state) => state.logout);
  const login = useAuthStore((state) => state.login);
  const authPayload = decodedToken();

  const { data: user } = useGetUser(authPayload?.id);

  useEffect(() => {
    if (authPayload == null) logout();
    if (user) login(user);
  }, [authPayload, login, logout, user]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="auth/*" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Route>
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
