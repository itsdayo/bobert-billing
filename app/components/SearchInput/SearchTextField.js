/**
 *
 * SearchTextField
 *
 */

import styled from 'styled-components';

const SearchTextField = styled.input`
  width: 337px;
  &::-moz-focus-inner {
    border: none;
    outline: none;
  }

  border: none;
  padding-bottom: 15px;
  background: transparent;
  border-bottom: 3px solid #dddddd;
  outline: none;

  ::-webkit-input-placeholder,
  ::placeholder {
    /* Chrome/Opera/Safari */
    color: #000000;
    opacity: 1;
    font-weight: 500;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #000000;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: black;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: black;
  }
`;

export default SearchTextField;
