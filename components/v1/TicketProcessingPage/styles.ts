import styled from 'styled-components';

export const ConfirmLeavingPage = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute; 
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ConfirmLeavingContainer = styled.div`
    width: 503px;

    @media screen and (max-width: 768px) {
        width: 343px;
    }
`;

export const Retention = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 400px;
    margin: 0 auto 40px;

    @media screen and (max-width: 768px) {
        width: 343px;
    }
`;

export const RetentionText = styled.p`
    text-align: center;
    width: 355px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 343px;
    }
`;

export const ConfirmLeavingButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Page = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--addable-grey);
`;

export const Form = styled.form`
    margin: 10% auto 0;
    width: 398px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (max-width: 768px) {
        width: 343px;
    }
`;

export const Title = styled.h3`
    text-align: center;
    font-weight: 500;
`;

export const CheckPage = styled.div`
    padding-top: 40px;
`;

export const CheckContainer = styled.div`
    width: 469px;
    margin: 16px auto 0; 
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (max-width: 768px) {
        width: 343px;
    }
`;

export const AlertContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60px;

    & > p {
        font-size: 12px;
    }

    & > p > span {
        font-weight: 700;
    }
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const InformationItem = styled.div`
    display: flex;
    padding: 16px;
    border-radius: 16px;    
    background: var(--main-white);
`;

export const About = styled(InformationItem)`
    flex-direction: column;
    gap: 8px;
`;

export const Place = styled(InformationItem)`
    justify-content: space-between;
    border: 1px solid var(--click-white);
`;

export const Services = styled.div``;

export const Service = styled.div`
    display: flex;
    align-items: flex-end;

    & > * {
        color: var(--addable-dark-grey);
        white-space: nowrap;
    }
`;

export const Dots = styled.div`
    width: 100%;
    margin-bottom: 3px;
    border-bottom: 1px dashed var(--addable-dark-grey);
`;

export const CheckResult = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    border-top: 1px solid var(--main-black);
`;

export const Total = styled.h3`
    font-size: 20px;
`;

export const Bottom = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 107px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--main-white);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 768px) {
        height: 120px;
        border-radius: 20px 20px 0px 0px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 16px;
`;
