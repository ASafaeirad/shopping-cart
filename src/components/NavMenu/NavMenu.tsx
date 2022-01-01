import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { menuItem } from "../../data/MenuItem";

const NavMenu = () => {
  return (
    <ul>
      {menuItem.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default NavMenu;