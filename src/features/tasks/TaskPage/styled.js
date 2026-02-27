import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
  color: ${({ theme }) => theme.color.teal};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
