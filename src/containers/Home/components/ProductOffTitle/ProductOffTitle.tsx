import { FC } from "react";
import { ProductOffEl } from "./productOffStyles";

interface Props {
  title: number;
}

const ProductOffTitle: FC<Props> = ({ title }) => {
  return <ProductOffEl>{title}% Off</ProductOffEl>;
};

export default ProductOffTitle;
