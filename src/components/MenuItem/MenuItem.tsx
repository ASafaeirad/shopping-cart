import React from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  title: string,
  link: string
}

const MenuItem: FC<Props> = ({ title, link }) => {
  return (
    <li>
      <NavLink to={link}>{title}</NavLink>
    </li>
  );
};

export default MenuItem;