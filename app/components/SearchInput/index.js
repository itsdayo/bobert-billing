/**
 *
 * SearchInput
 *
 */

import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';
import SearchTextField from './SearchTextField';

const SearchIcon = styled.div`
  position: relative;
  bottom: 38px;
  left: 325px;
`;

const SearchInputWrapper = styled.div`
  padding-top: 10px;
`;

function SearchInput(props) {
  return (
    <SearchInputWrapper>
      <SearchTextField {...props} />{' '}
      <SearchIcon>
        <Icon name="glass" />
      </SearchIcon>
    </SearchInputWrapper>
  );
}

SearchInput.propTypes = {};

export default SearchInput;
