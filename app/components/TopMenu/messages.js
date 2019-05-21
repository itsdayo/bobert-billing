/*
 * Navigation Messages
 *
 * This contains all the text for the Navigation component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Navigation';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Navigation component!',
  },
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  account: {
    id: `${scope}.account`,
    defaultMessage: 'Account',
  },
  quote: {
    id: `${scope}.quote`,
    defaultMessage: 'Get A Quote',
  },
  tracking: {
    id: `${scope}.tracking`,
    defaultMessage: 'Tracking',
  },
  billing: {
    id: `${scope}.billing`,
    defaultMessage: 'Billing',
  },
  help: {
    id: `${scope}.help`,
    defaultMessage: 'Help',
  },
});
