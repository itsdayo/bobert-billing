/**
 *
 * Icon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import GlassIcon from './GlassIcon';
import PlusIcon from './PlusIcon';
import TrackingIcon from './TrackingIcon';
import BillingIcon from './BillingIcon';
import AccountIcon from './AccountIcon';
import HelpIcon from './HelpIcon';
import RoundPlusIcon from './RoundPlusIcon';

function Icon({ name }) {
  if (name === 'glass') {
    return <GlassIcon />;
  }

  if (name === 'plus') {
    return <PlusIcon />;
  }
  if (name === 'tracking') {
    return <TrackingIcon />;
  }

  if (name === 'billing') {
    return <BillingIcon />;
  }
  if (name === 'account') {
    return <AccountIcon />;
  }

  if (name === 'help') {
    return <HelpIcon />;
  }

  if (name === 'round-plus') {
    return <RoundPlusIcon />;
  }

  return <GlassIcon />;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
