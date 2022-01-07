import React from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Li } from "./menuItemStyles";

interface Props {
  text: string;
  link: string;
  marginRNone?: boolean;
}

const MenuItem: FC<Props> = ({ text, link, marginRNone }) => {
  return (
    <Li marginRNone={marginRNone}>
      <NavLink to={link}>{text}</NavLink>
    </Li>
  );
};

export default MenuItem;
