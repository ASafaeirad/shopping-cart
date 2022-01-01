import User from "../../../../../../svg/User.svg";
import Cart from "../../../../../../svg/Cart.svg";
import { CartLink, NavMenu } from "./menuItemsStyles";

const MenuItems = () => {
  return (
    <NavMenu>
      <li>
        <a href="#">
          <img src={User} alt="user" />
          My profile
        </a>
      </li>
      <li>
        <CartLink href="#" totalNumber="5">
          <img src={Cart} alt="user" />
        </CartLink>
      </li>
      <li>
        <a href="#">Items</a>
      </li>
    </NavMenu>
  );
};

export default MenuItems;
