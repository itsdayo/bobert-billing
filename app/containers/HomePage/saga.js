/**
 * Gets the user from the challenge api
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_USER } from 'containers/App/constants';
import { userLoaded, userLoadingError } from 'containers/App/actions';

import request, { API_URL } from 'utils/request';
import { makeSelectUserId } from 'containers/App/selectors';

export function* getUserFlow() {
  // Select username from store
  const userId = yield select(makeSelectUserId());
  const requestURL = `${API_URL}/user/${userId}`;

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
export default function* homePageSaga() {
  // Watches for GET_USER actions and calls getUserFlow when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_USER, getUserFlow);
}
