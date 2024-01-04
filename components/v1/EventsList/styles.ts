import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 397px);
    gap: 16px; 

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 343px);
        gap: 40px; 
    }
`;
