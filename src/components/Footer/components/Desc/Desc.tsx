import { FC } from "react";
import { DescEl } from "./descStyles";

interface Props {
  text: string;
}
const Desc: FC<Props> = ({ text }) => {
  return <DescEl>{text}</DescEl>;
};

export default Desc;
