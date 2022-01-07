import Logo from "../../../Logo/Logo";
import NavMenu from "./components/NavMenu/NavMenu";
import { Wrapper } from './bottomNavStyles';
const BottomNav = () => {
  return (
    <Wrapper>
      <Logo link="/" />

      <NavMenu />
    </Wrapper>
  );
};

export default BottomNav;
