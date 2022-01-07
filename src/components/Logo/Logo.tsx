import LogoImg from "../../images/Logo.png";
import { NavLink } from "react-router-dom";
import { FC } from "react";

interface Props {
  link: string;
}

const Logo: FC<Props> = ({ link }) => {
  return (
    <NavLink to={link}>
      <img src={LogoImg} alt="Logo" />
    </NavLink>
  );
};

export default Logo;
