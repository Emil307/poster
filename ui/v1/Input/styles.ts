import styled from "styled-components";

export const InputStyled = styled.input`
 font-family: "WixMadeforDisplay", sans-serif;
 font-size: 16px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;

 width: 100%;
 padding: 7px 8px;
 border-radius: 8px;
 background-color: var(--main-white);
 border: 1px solid var(--addable-grey);

 &:focus {
  border: 1px solid var(--main-yellow, #FFE700);
  border-radius: 8px;
 }

//  &:invalid {
//   background-color: var(--addable-red-bg);
//   border: 1px var(--addable-red) solid;
//  }

//  &:invalid::-moz-placeholder {
//   color: var(--addable-red);
//  }

//  &:invalid::-webkit-input-placeholder {
//   color: var(--addable-red);
//  }

 &[disabled] {
  background-color: var(--addable-grey);
  border: 1px solid var(--click-white);
  color: var(--addable-dark-grey);
 }
`;
