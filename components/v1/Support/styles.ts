import styled from 'styled-components';

const Button = styled.button`
    position: fixed;
    z-index: 1001;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: var(--main-yellow);
    border-radius: 50%;
    transition: all .2s ease-in-out;

    &:hover {
        background: #EFCA0B; 
    }
`;

export const ButtonDesktop = styled(Button)`
    bottom: 80px;
    right: 40px;
    display: flex;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ButtonMobile = styled(Button)`
    bottom: 32px;
    right: 16px;
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
    }
`;
