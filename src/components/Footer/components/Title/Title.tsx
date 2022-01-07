import { FC } from "react";
import { TitleEl } from "./titleStyles";

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return <TitleEl>{title}</TitleEl>;
};

export default Title;
