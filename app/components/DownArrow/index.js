/**
 *
 * DownArrow
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function DownArrow(props) {
  return <Arrow {...props} />;
}

const Arrow = styled.i`
  border: solid ${props => (props.secondary ? '#fff' : '#3755b0')};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  position: relative;
  bottom: 1px;
  cursor: pointer;
  transform: scaleX(-1);
  -webkit-transform: rotate(45deg);
`;

DownArrow.propTypes = {};

export default DownArrow;
