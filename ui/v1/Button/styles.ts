import { styled } from "styled-components";

const Button = styled.button`
 display: flex;
 width: 100%;
 max-width: 398px;
 height: 56px;
 justify-content: center;
 align-items: center;
 border-radius: 16px;

 font-family: "Unbounded", sans-serif;
 font-size: 16px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;

 color: var(--main-black, #000);

 transition: .2s ease-in-out;
`

export const PrimaryButton = styled(Button)`
 &&& {
  background-color: var(--main-yellow);

  &:hover {
   background-color: var(--hover-yellow);
  }

  &[disabled] {
   background-color: var(--addable-grey);
   color: var(--addable-dark-grey);
  }
 }
`;

export const SecondaryButton = styled(Button)`
 &&& {
  &:hover {
   background-color: var(--hover-white);
  }

  &[disabled] {
   background-color: var(--addable-grey);
   color: var(--addable-dark-grey);
  }
 }
`;

export const TertiaryButton = styled(Button)`
 &&& {
  border: 1px solid var(--addable-grey, #ECECEE);

  &:hover {
   border: 1px solid var(--addable-dark-gray, #8C9298);
  }

  &[disabled] {
   background-color: var(--addable-grey);
   color: var(--addable-dark-grey);
  }
 }
`;
