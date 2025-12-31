import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    `;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};

  ${({ hidden }) =>
        hidden &&
        css`
      display: none;
    `}
`;


export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
        `}
        `;

export const Button = styled.button`
        border:none;
        color: ${({ theme }) => theme.color.white};
        width: 30px;
        height: 30px;
        padding: 0;
        transition: filter 0.3s;
        
    ${({ toggleDone }) => toggleDone && css`
        background: ${({ theme }) => theme.color.forestGreen};
    `}
    
    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.color.crimson};
    `}
    &:hover {
        filter: brightness(110%);
    }
    
    &:active {
        filter: brightness(120%);
    }
`;