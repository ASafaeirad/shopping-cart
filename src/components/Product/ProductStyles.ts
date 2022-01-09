import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.article`
  height: 100%;
  text-align: center;
  border: 3px solid #f7f5f5;
  border-radius: 5px;
  over-flow: hidden;
  transition: 0.5s ease;
  
  &:hover {
    transform: scale(0.9);
  }

  & > a > img {
    max-width: 270px;
  }

  & h3 {
    max-width: none;
    font-size: 18px;
  }

  .footer__product {
    display: flex;
    align-items: center;
    justify-content: center;

    & > span {
      font-size: 18px;
    }

    & > div {
      margin-left: 13px;
    }

    & > div > span {
      font-size: 14px;
    }
  }

  & footer {
    padding: 1rem;
  }

  & .stars {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 130px;
    margin: 0.5rem auto;
  }
`;

export const ProductImgLink = styled(NavLink)`
  background-color: #f7f5f5;
  height: 276px;
  display: flex;
  align-items: center;
  justify-content: center;
`;