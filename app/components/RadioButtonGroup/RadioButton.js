import styled from 'styled-components';
import RadioButtonLabel from './RadioButtonLabel';

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  margin-right: 16px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    border: 2px solid #bfc2cb;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background: grey;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: #bfc2cb;
    border: 2px solid #bfc2cb;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`;
export default RadioButton;
