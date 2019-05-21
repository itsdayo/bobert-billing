import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the billingPage state domain
 */

const selectBillingPageDomain = state => state.billingPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectTotalBalance = () =>
  createSelector(
    selectBillingPageDomain,
    substate =>
      substate.billingInfo &&
      new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
      }).format(substate.billingInfo.balance),
  );
const makeSelectBillingItems = () =>
  createSelector(
    selectBillingPageDomain,
    substate => substate.billingInfo && substate.billingInfo.items,
  );

const makeSelectPaymentMethods = () =>
  createSelector(
    selectBillingPageDomain,
    substate => {
      if (substate.billingInfo) {
        const { bankAccounts, cards } = substate.billingInfo.paymentMethods;
        const totalMethods = bankAccounts.concat(cards);
        return totalMethods;
      }
      return [];
    },
  );

const makeSelectDefaultPaymentMethod = () =>
  createSelector(
    selectBillingPageDomain,
    substate => {
      if (substate.billingInfo && substate.billingInfo.paymentMethods) {
        const { bankAccounts, cards } = substate.billingInfo.paymentMethods;
        const totalMethods = bankAccounts.concat(cards);
        return totalMethods.find(method => method.isDefault === true);
      }
      return {};
    },
  );

/**
 * Default selector used by BillingPage
 */

const makeSelectBillingPage = () =>
  createSelector(
    selectBillingPageDomain,
    substate => substate,
  );

export default makeSelectBillingPage;
export {
  selectBillingPageDomain,
  makeSelectTotalBalance,
  makeSelectBillingItems,
  makeSelectPaymentMethods,
  makeSelectDefaultPaymentMethod,
};
