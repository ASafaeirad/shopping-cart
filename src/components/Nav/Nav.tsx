import TopNav from "./components/TopNav/TopNav";
import BottomNav from "./components/BottomNav/BottomNav";
import { Container } from "react-bootstrap";
import { MenuLine, NavWrapper } from "./navStyles";


const Nav = () => {
  return (
    <>
      <NavWrapper className="nav">
        <Container>
          <TopNav />
        </Container>

        <MenuLine />

        <Container>
          <BottomNav />
        </Container>
      </NavWrapper>
    </>
  );
};

export default Nav;
