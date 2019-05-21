import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DownArrow from 'components/DownArrow';
import { fadeIn } from '../../global-styles';

function SelectDropdown({ defaultTitle, onTitleClick, options }) {
  let selectTitle = defaultTitle;

  const [listSelection, setSelection] = useState(null);

  const [showDropdown, setDropdownVisibility] = useState(false);

  if (listSelection) {
    selectTitle = listSelection.title;
  }

  function handleTitleClick() {
    if (listSelection === null) {
      setDropdownVisibility(!showDropdown);
      return;
    }
    onTitleClick(listSelection);
  }

  function renderListItems() {
    if (options.length > 0) {
      return options.map(option => (
        <SelectListItem
          key={option.value}
          onClick={() => {
            setDropdownVisibility(!showDropdown);
            setSelection(option);
          }}
        >
          {option.title}
        </SelectListItem>
      ));
    }
    return null;
  }
  return (
    <div>
      <SelectWrapper>
        <TitleWrapper>
          <SelectTitle onClick={handleTitleClick}>{selectTitle}</SelectTitle>
        </TitleWrapper>
        <SelectArrow onClick={() => setDropdownVisibility(!showDropdown)} />
      </SelectWrapper>

      {showDropdown && (
        <DropdownWrapper>
          <SelectList dir="rtl">{renderListItems()}</SelectList>
        </DropdownWrapper>
      )}
    </div>
  );
}

const SelectWrapper = styled.div`
  display: flex;
  padding: 0px;
  width: 85%;
  flex-direction: row;
`;

const SelectTitle = styled.span`
  color: #3755b0;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  align-self: flex-start;
  flex: auto;
`;

const SelectArrow = styled(DownArrow)`
  bottom: 5px;
  align-self: flex-end;
`;

const SelectList = styled.ul`
  list-style: none;
  padding-right: 16px;
  padding-top: 18px;
  padding-left: 20px;
  padding-bottom: 18px;
  margin-bottom: 0px;
  font-weight: 500;
`;

const SelectListItem = styled.li`
  height: 30px;
  margin-right: 20px;
  color: #bfc2cb;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const DropdownWrapper = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  position: relative;
  background: #484b54;
  min-width: 160px;
  right: 66px;
  border-radius: 15px;
  z-index: 2;
  padding: 0px;
  bottom: 3px;
  animation: 0.5s ${fadeIn} ease-in;

  ::after {
    bottom: 100%;
    right: 15px;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(72, 75, 84, 0);
    border-bottom-color: #484b54;
    border-width: 8px;
    margin-left: -10px;
  }
`;

SelectDropdown.propTypes = {
  defaultTitle: PropTypes.string,
  options: PropTypes.array,
  onTitleClick: PropTypes.func,
};

export default SelectDropdown;
