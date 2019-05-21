/**
 *
 * React Table v7
 * https://codesandbox.io/s/m5lxzzpz69
 * https://github.com/tannerlinsley/react-table
 */

import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Table = styled.div`
  display: block;
  border: solid 1px #ddd;
  border-top: solid 10px #f8f8f8;
  position: absolute;
  width: 100%;
  top: 150px;
`;

const RowBase = styled.div`
  display: flex;
  border-bottom: solid 1px #ddd;
  padding-left: 45px;
  max-height: 65px;

  :last-child {
    border-bottom: 0;
  }
`;

export const Row = styled(RowBase)`
  animation: 1s ${fadeIn} ease-in;
  ${props =>
    props.even &&
    css`
      background-color: #f8f8f8;
    `}
`;

export const HeaderRow = styled(RowBase)`
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`;

export const Pagination = styled(RowBase)`
  background: rgba(42, 117, 146, 1);
  color: white;
`;

export const Cell = styled.div`
  padding: 1rem;
  font-size: 14px;
  font-weight: 300;

  :last-child {
    border-right: 0;
  }
`;

export const Header = styled(Cell)`
  font-weight: bold;
  font-size: 14px;
  ${props => {
    const width = (props.sortedIndex + 1) * 5;
    return (
      props.sorted &&
      (props.sortedDesc
        ? css`
            box-shadow: inset 0 ${width}px hsla(0, 100%, 40%);
          `
        : css`
            box-shadow: inset 0 -${width}px hsl(55, 100%, 50%);
          `)
    );
  }};
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 0.7rem;
  background: white;
  border-radius: 5px;
  cursor: pointer;

  :disabled {
    opacity: 0.3;
  }
`;

export const Select = styled.select`
  appearance: none;
  background: white;
  border: 0;
  margin: 0;
  color: black;
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.5rem 0.7rem;
  border: 0;
  cursor: pointer;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem 0.7rem;
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  max-width: 100%;
`;

export const Emoji = styled.span`
  font-size: 1rem;
  margin: 0 0.3rem;
  display: inline-block;
  transform: scale(1.4);
`;
