import styled from 'styled-components';

export const FooterContainer = styled.footer`
    margin-top: 73px;
    padding: 0 24px;
    border-radius: 32px 32px 0 0;
    background-color: var(--main-black);

    @media screen and (max-width: 768px) {
        margin-top: 35px;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    max-width: 1176px;
    margin: 0 auto;
    padding: 64px 0 88px;

    @media screen and (max-width: 768px) {
        max-width: 343px;
        padding: 39px 0 31px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-family: Unbounded, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    color: var(--main-white);
`;

export const Paragraph = styled.p`
    margin: 8px auto 24px;
    text-align: center;
    opacity: .7;
    color: var(--main-white);
`;

export const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: calc(100% - 220px) 200px;
    gap: 20px;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

export const Info = styled.div`
    width: 100%;
    max-width: 1224px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 21px 0 256px;

    @media screen and (max-width: 768px) {
        max-width: 343px;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0;
    }
`;

export const Socials = styled.div`
    width: min-content;
    height: 32px;
    display: flex;
    gap: 20px;

    @media screen and (max-width: 768px) {
        height: 58px;
        padding-bottom: 26px;
    }
`;

export const InfoItem = styled.div`
    width: 396px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 13px;
    border-top: 1px solid var(--main-white);

    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        padding-bottom: 84px;
    }
`;

export const LinksTitle = styled.h3`
    color: var(--main-white);
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Link = styled.a`
    opacity: .7;
`;
