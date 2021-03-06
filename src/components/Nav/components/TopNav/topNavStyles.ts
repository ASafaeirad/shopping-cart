import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0; 
  & form {
    background-color: #f5f5f5;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    width: 330px;
    padding: 0 1rem;
    margin-left: 1rem;
    & input {
      padding: 0.6rem 0;
      outline: none;
      background-color: transparent;
    }
  }
`;

export const RightNav = styled.div``;

export const LoginWrapper = styled.div`
display:flex;
align-items:center;
`