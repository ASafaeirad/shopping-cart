import FooterTop from "./components/FooterTop/FooterTop";
import { Wrapper } from "./footerStyles";
import { Container } from "react-bootstrap";
import FooterBottom from "./components/FooterBottom/FooterBottom";
import Brand1 from "../../svg/Footer-icon-1.svg";
import Brand2 from "../../svg/Footer-icon-2.svg";
import Brand3 from "../../svg/Footer-icon-3.svg";
import Brand4 from "../../svg/Footer-icon-4.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterTop />
        <FooterBottom />

        <div className="line__footer"></div>

        <div className="footer__brands">
          <NavLink to="/">
            <img src={Brand1} />
          </NavLink>

          <NavLink to="/">
            <img src={Brand2} />
          </NavLink>

          <NavLink to="/">
            <img src={Brand3} />
          </NavLink>

          <NavLink to="/">
            <img src={Brand4} />
          </NavLink>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
