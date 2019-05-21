/**
 *
 * Dropdown Box
 *
 */

import styled from 'styled-components';
import { fadeIn } from '../../global-styles';

const DropdownBox = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  position: relative;
  background: #484b54;
  max-width: 260px;
  border-radius: 15px;
  bottom: 3px;
  left: 271px;
  z-index: 2;
  animation: 0.5s ${fadeIn} ease-in;

  ::after {
    bottom: 100%;
    left: 55px;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(72, 75, 84, 0);
    border-bottom-color: #484b54;
    border-width: 10px;
    margin-left: -10px;
  }
`;

export default DropdownBox;
