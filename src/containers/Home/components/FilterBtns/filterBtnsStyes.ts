import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 550px;
  margin: 2rem auto;
  & button {
    font-size: 22px;
    color: #262626;
    position: relative;
    transition: 0.5s ease;
  }

  & button::after {
    transition: 0.5s ease;
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #33a0ff;
  }

  & button:hover {
    color: #33a0ff;
  }

  & button:hover::after {
    width: 100%;
  }
`;
