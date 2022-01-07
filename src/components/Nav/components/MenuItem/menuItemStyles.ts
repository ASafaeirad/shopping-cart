import styled from "styled-components";

interface Props {
  marginRNone?: boolean;
}

export const Li = styled.li<Props>`
  margin: 0 2rem;
  margin-right: ${({ marginRNone }) => (marginRNone ? 0 : null)};
  & a {
    font-size: 20px;
    color: #262626;
  }
`;