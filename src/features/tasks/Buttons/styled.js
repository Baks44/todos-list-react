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

export const Loading = styled.span`
  color: #888;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
`;
