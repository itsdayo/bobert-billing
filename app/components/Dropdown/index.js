/**
 *
 * Dropdown
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import DropdownBox from './DropdownBox';

function Dropdown({ children, showDropdown }) {
  return showDropdown ? <DropdownBox>{children}</DropdownBox> : <div />;
}

Dropdown.propTypes = {
  children: PropTypes.any,
  showDropdown: PropTypes.bool,
};

export default Dropdown;
