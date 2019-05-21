/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  user: null,
  userId: 'u2kjfladadwddj9',
  organizationId: '',
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USER:
        draft.loading = true;
        draft.error = false;
        draft.user = null;
        break;

      case GET_USER_SUCCESS:
        draft.loading = false;
        draft.user = action.user;
        draft.organizationId = action.user.user.organizationId;
        break;

      case GET_USER_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
