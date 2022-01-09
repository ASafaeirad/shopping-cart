import { FC } from "react";

interface Props {
  text: string;
}

const FilterBtn: FC<Props> = ({ text }) => {
  return <button>{text}</button>;
};

export default FilterBtn;
