import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  margin-right: 12px;
  margin-left: 20px;
  padding-top: 8px;
  padding-left: 10px;
  padding-right: 12px;
  padding-bottom: 8px;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: ${props => (props.highlightYellow ? '#f7Ca02' : '#fff')};
  ${props =>
    props.activeNavLink &&
    css`
      background: rgba(255, 255, 255, 0.15);
    `}

  &:active {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
  }
`;
