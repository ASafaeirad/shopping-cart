import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Li, FooterMenuLink } from "./footerMenuStyles";

interface Props {
  link: string;
  text: string;
  id: number;
}

const FooterMenuItem: FC<Props> = ({ text, link, id }) => {
  return (
    <Li>
      <FooterMenuLink to={link}>{text}</FooterMenuLink>
    </Li>
  );
};

export default FooterMenuItem;
