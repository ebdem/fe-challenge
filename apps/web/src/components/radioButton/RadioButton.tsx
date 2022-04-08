import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  margin-right: 30px;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  margin-left: -10px;
  margin-right: 10px;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 5px solid #F3F3F3;
`;

export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  border: 5px solid #F3F3F3;
  width: 24px;
  height: 24px;
  
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      margin: 6px;
      background: #eeeeee;
    }
  }
  ${(props) =>
        props.checked &&
        ` 
    &:checked + ${RadioButtonLabel} {
      background: #008000;
      border: 5px solid #F3F3F3;
      &::after {
        content: "";
        display:block;
        border-radius: 50%;
        background: transparent
      }
    }
  `}
`;