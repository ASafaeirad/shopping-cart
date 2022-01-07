import { Wrapper } from "./footerBottomStyles";
import Title from "./../Title/Title";
import FooterMenu from "../FooterMenu/FooterMenu";
const FooterBottom = () => {
  return (
    <Wrapper>
      <div>
        <Title title="Information" />
        <FooterMenu />
      </div>

      <div>
        <Title title="Service" />
        <FooterMenu />
      </div>

      <div>
        <Title title="My Account" />
        <FooterMenu />
      </div>

      <div>
        <Title title="Our Offers" />
        <FooterMenu />
      </div>
    </Wrapper>
  );
};

export default FooterBottom;
