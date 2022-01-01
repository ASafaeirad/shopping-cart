import MenuItems from "./components/MenuItems/MenuItems";
import ChooseLanguage from "./components/ChooseLanguage/ChooseLanguage";
import { RightNav, Wrapper } from "./topNavStyles";
import Search from "../../../../svg/Search.svg";

const TopNav = () => {
  return (
    <Wrapper>
      <ChooseLanguage />
      <RightNav className="d-flex">
        <MenuItems />
        <form>
          <input
            className="border-0 outline-0"
            type="text"
            placeholder="$0.00"
          />
          <img src={Search} alt="" />
        </form>
      </RightNav>
    </Wrapper>
  );
};

export default TopNav;
