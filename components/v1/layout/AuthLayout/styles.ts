import styled from "styled-components";

export const Page = styled.div`
 position: relative;
 display: flex;
 width: 100vw;
 height: 100vh;
 justify-content: center;
 align-items: center;
 background-color: var(--main-black);
 overflow: hidden;
`

export const Content = styled.div`
 max-width: calc(100% - 32px);
 width: max-content;
 min-width: 288px;
 width: 413px;
 padding: 24px;
 border-radius: 32px;
 background-color: var(--main-white);

 @media screen and (max-width: 768px) {
    width: 343px;
 }
`

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 0 48px;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`