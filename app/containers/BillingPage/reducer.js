/*
 *
 * BillingPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_BILLING_INFO,
  LOAD_BILLING_INFO_SUCCESS,
  LOAD_BILLING_INFO_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  billingInfo: null,
};

/* eslint-disable default-case, no-param-reassign */
const billingPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_BILLING_INFO:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_BILLING_INFO_SUCCESS:
        draft.billingInfo = action.info;
        draft.loading = false;
        break;

      case LOAD_BILLING_INFO_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default billingPageReducer;
