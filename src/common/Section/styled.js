import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 10px 0;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 20px 0;

    @media screen and (max-width: ${({ theme }) => theme.brakepoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
`;


export const Body = styled.div`
    padding: 20px;
    border-top: 1px solid ${({ theme }) => theme.color.alto};
    `;