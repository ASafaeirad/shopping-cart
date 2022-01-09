import { FC } from "react";
import { TitleEl } from './productTitleStyles';

interface Props {
  title: string;
}

const ProductTitle: FC<Props> = ({ title }) => {
  return <TitleEl>{title}</TitleEl>;
};

export default ProductTitle;
