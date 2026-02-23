import { Nav, List, Item, StyledNavLink } from "./styled";

const Navigation = () => (
  <Nav>
    <List>
      <Item>
        <StyledNavLink to="/">Zadania</StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to="/about">O autorze</StyledNavLink>
      </Item>
    </List>
  </Nav>
);

export default Navigation;
