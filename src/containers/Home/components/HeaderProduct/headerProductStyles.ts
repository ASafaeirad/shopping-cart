import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled(NavLink)`
  display: block;
  background-color: #f6f6f6;
  flex-grow: 1;
  border-radius: 5px;
  padding: 2rem;
  transition: 0.5s ease;
  &:hover {
    background-color: #e4e4e4;
  }

  & img {
    margin: 1rem 0;
    width: 100%;
    height: 170px;
  }

  .product__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product__footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
