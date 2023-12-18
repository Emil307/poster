import styled from "styled-components";

export const InputStyled = styled.input`
 font-family: "Wix Madefor Display", sans-serif;
 font-size: 16px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 color: var(--addable-dark-gray);

 width: 100%;
 max-width: 398px;
 padding: 7px 8px;
 border-radius: 8px;
 background-color: var(--main-white);
 border: 1px solid var(--addable-grey);

 &:focus {
  outline: 1px solid var(--main-yellow, #FFE700);
 }

 &:invalid {
  background-color: var(--addable-red-bg);
  border: 1px var(--addable-red) solid;
 }

 &:invalid::-moz-placeholder {
  color: var(--addable-red);
 }

 &:invalid::-webkit-input-placeholder {
  color: var(--addable-red);
 }

 &[disabled] {
  background-color: var(--addable-grey);
  border: 1px solid var(--click-white);
  color: var(--addable-dark-grey);
 }
`;
