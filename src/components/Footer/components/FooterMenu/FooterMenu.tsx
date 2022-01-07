import { footerMenuData } from "../../data/footerMenuData";
import FooterMenuItem from "../FooterMenuItem/FooterMenuItem";
const FooterMenu = () => {
  return (
    <ul>
      {footerMenuData.map((item) => (
        <FooterMenuItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default FooterMenu;
