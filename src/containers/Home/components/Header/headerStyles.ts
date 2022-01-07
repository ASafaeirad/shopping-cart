import styled from "styled-components";
import HeaderBg from "../../../../images/header-bg.png";

export const Wrapper = styled.div`
  height: 655px;
  background-size: 100% 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-image: url(${HeaderBg});
  background-attachment: fixed;
`;

export const HeaderH1 = styled.h1`
  color: #fff;
  font-size: 68px;
  font-weight: bold;
  padding-top: 17.2rem;
  padding-left: 7rem;
`;
