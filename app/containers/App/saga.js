/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_USER } from './constants';
import { userLoaded, userLoadingError } from './actions';
import { makeSelectUserId } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getUserFlow() {
  // Select username from store
  const userId = yield select(makeSelectUserId());
  const requestURL = `https://challenge.mothership.com/user/${userId}`;

  try {
    // Call our request helper (see 'utils/request')
    const user = yield call(request, requestURL);
    yield put(userLoaded(user));
  } catch (err) {
    yield put(userLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appSaga() {
  // Watches for GET_USER actions and calls getUserFlow when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_USER, getUserFlow);
}
