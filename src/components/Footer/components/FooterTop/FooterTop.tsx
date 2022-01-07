import { Wrapper } from "./footerTopStyles";
import Logo from "./../../../Logo/Logo";
import Title from "./../Title/Title";
import Desc from "./../Desc/Desc";

const FooterTop = () => {
  return (
    <Wrapper>
      <div>
        <Logo link="/"/>

        <Desc
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.Since the 1500s, when an unknown printer."
        />
      </div>

      <div>
        <Title title="Follow Us" />
        <Desc
          text="Since the 1500s, when an unknown printer took a galley of type and
          scrambled."
        />
      </div>

      <div>
        <Title title="Contact Us" />
        <Desc text="E-Comm , 4578 Marmora Road,  Glasgow D04 89GR" />
      </div>
    </Wrapper>
  );
};

export default FooterTop;
