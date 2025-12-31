import { HeaderWrapper, Title } from "./styled";

const Header = ({ title, extraHeaderContent }) => (
  <HeaderWrapper>
    <Title>{title}</Title>
    {extraHeaderContent}
  </HeaderWrapper>
);

export default Header;
