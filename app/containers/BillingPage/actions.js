/*
 *
 * BillingPage actions
 *
 */

import {
  LOAD_BILLING_INFO,
  LOAD_BILLING_INFO_SUCCESS,
  LOAD_BILLING_INFO_ERROR,
} from './constants';

export function loadBillingInfo() {
  return {
    type: LOAD_BILLING_INFO,
  };
}

/**
 * Dispatched when the billing info is loaded by the saga
 *
 * @param  {object} info The bllling data
 *
 * @return {object}      An action object with a type of LOAD_BILLING_INFO_SUCCESS passing the billing data
 */
export function billingInfoLoaded(info) {
  return {
    type: LOAD_BILLING_INFO_SUCCESS,
    info,
  };
}

/**
 * Dispatched when loading the billing info fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_BILLING_INFO_ERROR passing the error
 */
export function billingInfoLoadingError(error) {
  return {
    type: LOAD_BILLING_INFO_ERROR,
    error,
  };
}
