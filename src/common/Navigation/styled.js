import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Item = styled.li`
  flex: 1;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.teal};
  font-weight: 600;

  &.active {
    background: ${({ theme }) => theme.color.teal};
    color: white;
  }

  &:hover {
    background: ${({ theme }) => theme.color.lightTeal};
    color: white;
  }
`;
