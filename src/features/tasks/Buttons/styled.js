import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
`;

export const Button = styled.button`
  color: teal;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 20px;

  ${({ disabled }) =>
        disabled &&
        css`
      color: #ccc;
      cursor: not-allowed;
    `}
`;
