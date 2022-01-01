import { FC } from "react";
import { ReactNode } from "react";
import { useLocation } from "react-router";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Nav />
      <>{children}</>

      {pathname === "/login" || pathname === "/register" ? null : <Footer />}
    </>
  );
};

export default MainLayout;
