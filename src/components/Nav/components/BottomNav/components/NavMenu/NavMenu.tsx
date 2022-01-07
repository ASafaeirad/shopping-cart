import { navMenuItems } from "./../../../../data/navMenuItems";
import MenuItem from "../../../MenuItem/MenuItem";

import { MenuWrapper } from "./navMenuStyle";

const NavMenu = () => {
  return (
    <MenuWrapper>
      {navMenuItems?.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </MenuWrapper>
  );
};

export default NavMenu;
