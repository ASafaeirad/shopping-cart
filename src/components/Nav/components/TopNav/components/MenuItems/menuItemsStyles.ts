import styled from "styled-components";

interface Props {
  totalNumber: string;
}

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  & li {
    margin: 0 1rem;
  }

  & a {
    color: #262626;
    display: flex;
    align-items: center;
    font-size: 19px;
  }

  & li:first-child a img {
    margin-right: 0.5rem;
  }

  & li:nth-child(2) a {
    position: relative;
  }
`;

export const CartLink = styled.a<Props>`
  &::before {
    content: "${(props) => (props.totalNumber ? props.totalNumber : "2")}";
    position: absolute;
    background-color: #fb7181;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    font-size: 9px;
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #fff;
    top: -8px;
    right: -10px;
  }
`;