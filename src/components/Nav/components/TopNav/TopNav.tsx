import MenuItems from "./components/MenuItems/MenuItems";
import ChooseLanguage from "./components/ChooseLanguage/ChooseLanguage";
import { RightNav, Wrapper, LoginWrapper } from "./topNavStyles";
import Search from "../../../../svg/Search.svg";
import MenuItem from "../MenuItem/MenuItem";
import { useAuthStore } from "../../../../stores/store";

const TopNav = () => {
  const isLogin = useAuthStore((state) => state.isLogin);

  return (
    <Wrapper>
      <ChooseLanguage />

      {isLogin ? (
        <RightNav className="d-flex">
          <MenuItems />
          <form>
            <input
              className="border-0 outline-0 w-100"
              type="text"
              placeholder="$0.00"
            />
            <img src={Search} />
          </form>
        </RightNav>
      ) : (
        <LoginWrapper>
          <MenuItem link="/auth/login" text="Login" />
          <MenuItem link="/auth/register" text="Register" marginRNone={true} />
        </LoginWrapper>
      )}
    </Wrapper>
  );
};

export default TopNav;
