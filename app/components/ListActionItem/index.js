/**
 *
 * ListActionItem
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon';

function ListActionItem() {
  return (
    <ListActionWrapper>
      <Icon name="round-plus" />
      <ListActionText> Add Payment Source</ListActionText>
    </ListActionWrapper>
  );
}

ListActionItem.propTypes = {};

const ListActionWrapper = styled.div`
  padding: 10px;
  margin-left: 11px;
  margin-bottom: 2px;
`;

const ListActionText = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  position: relative;
  top: 1px;
  left: 8px;
`;

export default ListActionItem;
