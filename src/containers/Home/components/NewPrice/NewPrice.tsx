import { FC } from "react";
import { NewPriceEl } from './newPriceStyles';

interface Props {
  text: number;
}

const NewPrice: FC<Props> = ({ text }) => {
  return <NewPriceEl>${text}</NewPriceEl>;
};

export default NewPrice;
