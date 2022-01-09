import { useEffect } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "./Home/Home";
import ProductPage from "../components/ProductPage/ProductPage";
import Register from "./Register/Register";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import { GlobalStyles } from "./../styles/GlobalStyles";
import { useAuthStore } from "../store/store";
import { useGetUser } from "../hooks/products";
import { DecodeToken, decodedToken } from "./../utils/decoded";
import Products from "./Products/Products";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Cart from "./Cart/Cart";

const App = () => {
  const falseIsLogin = useAuthStore((state) => state.falseIsLogin);
  const trueIsLogin = useAuthStore((state) => state.trueIsLogin);
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);

  const userData: DecodeToken | undefined = decodedToken();

  const { data, isLoading } = useGetUser(userData?.id);

  const handleIsLogin = () => {
    if (userData === undefined) {
      falseIsLogin();
    } else {
      trueIsLogin();
      setUser(data);
    }
  };

  useEffect(() => {
    handleIsLogin();
  });

  if (isLoading) return <p>Loading....</p>;

  return (
    <MainLayout>
      <GlobalStyles />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/products/:id" element={<ProductPage />}></Route>
      </Routes>
    </MainLayout>
  );
};

export default App;
