import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_USER_SUCCESS } from 'containers/App/constants';
import { LOAD_BILLING_INFO } from 'containers/BillingPage/constants';
import { getUser } from 'containers/App/actions';
import {
  billingInfoLoaded,
  billingInfoLoadingError,
} from 'containers/BillingPage/actions';

import {
  makeSelectUser,
  makeSelectOrganizationId,
} from 'containers/App/selectors';

import request, { API_URL } from 'utils/request';

/**
 * Billing info request/response handler
 */
export function* getBillingInfo() {
  // Select username from store

  const user = yield select(makeSelectUser());
  if (user === null) {
    yield put(getUser());
  } else {
    const organizationId = yield select(makeSelectOrganizationId());

    const requestURL = `${API_URL}/organization/${organizationId}/billing`;

    try {
      // Call our request helper (see 'utils/request')
      const info = yield call(request, requestURL);
      yield put(billingInfoLoaded(info));
    } catch (err) {
      yield put(billingInfoLoadingError(err));
    }
  }
}
// Individual exports for testing
export default function* billingPageSaga() {
  // See example in containers/HomePage/saga.js

  yield takeLatest(LOAD_BILLING_INFO, getBillingInfo);
  yield takeLatest(GET_USER_SUCCESS, getBillingInfo);
}
