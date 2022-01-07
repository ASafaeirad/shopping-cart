import User from "../../../../../../svg/User.svg";
import Cart from "../../../../../../svg/Cart.svg";
import { CartLink, NavMenu, UserName } from "./menuItemsStyles";
import { useAuthStore } from "../../../../../../store/store";
import { NavLink } from "react-router-dom";

const MenuItems = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <NavMenu>
      <li>
        <NavLink to="/panel">
          <img src={User} alt="user" />
          <UserName>{user !== undefined ? user.username : null}</UserName>
        </NavLink>
      </li>
      <li>
        <CartLink to="/cart" totalnumber="5">
          <img src={Cart} alt="user" />
        </CartLink>
      </li>
      <li>
        <NavLink to="/products">Items</NavLink>
      </li>
    </NavMenu>
  );
};

export default MenuItems;
