/**
 *
 * RadioButtonGroup
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RadioButtonItem from './RadioButtonItem';
import RadioButton from './RadioButton';
import RadioButtonLabel from './RadioButtonLabel';
import RadioButtonText from './RadioButtonText';

function RadioButtonGroup({ options }) {
  const firstOption = options.length > 0 ? options[0].value : null;
  const [select, setSelect] = useState(firstOption);
  const handleSelectChange = event => {
    const { value } = event.target;
    setSelect(value);
  };
  function makeRadioButtons() {
    return (
      options &&
      options.map(option => (
        <RadioButtonItem>
          <RadioButton
            type="radio"
            name="radio"
            key={option.title}
            value={option.value}
            checked={select === option.value}
            onChange={event => handleSelectChange(event)}
          />
          <RadioButtonLabel />
          <RadioButtonText>{option.title}</RadioButtonText>
        </RadioButtonItem>
      ))
    );
  }
  const radioButtons = options.length > 0 ? makeRadioButtons() : null;
  return <Wrapper>{radioButtons}</Wrapper>;
}

RadioButtonGroup.propTypes = {
  options: PropTypes.array,
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  padding-left: 18px;
  padding-right: 22px;
  box-sizing: border-box;
`;

export default RadioButtonGroup;
