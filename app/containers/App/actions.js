import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from './constants';

/**
 * Get user, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_USER
 */
export function getUser() {
  return {
    type: GET_USER,
  };
}

/**
 * Dispatched when a user is loaded by the request saga
 *
 * @param  {object} user The userdata
 *
 *
 * @return {object} An action object with a type of GET_USER_SUCCESS passing the user
 */
export function userLoaded(user) {
  return {
    type: GET_USER_SUCCESS,
    user,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of GET_USER_ERROr passing the error
 */
export function userLoadingError(error) {
  return {
    type: GET_USER_ERROR,
    error,
  };
}
