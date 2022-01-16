import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export const AuthLayout: React.FC = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<>Loading 2</>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainLayout;
