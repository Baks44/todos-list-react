import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 10px;
  }
`;

export const Title = styled.h2`
  margin: 0;;
  font-size: 20px;
  font-weight: 600;
  user-select: none;
  cursor: default;
`;

export const PageTitle = styled.h1`
  margin: 0 0 20px 0;
  font-family: "Montserrat", sans-serif;
  font-size: 38px;
  font-weight: 600;
  user-select: none;
  cursor: default;
`;
