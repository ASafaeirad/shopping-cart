import { FC } from "react";
import { PriceEl } from './productPriceStyles';

interface Props {
  text: number;
}

const ProductPrice: FC<Props> = ({ text }) => {
  return <PriceEl>${text}</PriceEl>;
};

export default ProductPrice;
