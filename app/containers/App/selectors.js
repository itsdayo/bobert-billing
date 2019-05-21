import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;
const selectRouter = state => state.router;

const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    globalState => (globalState.user ? globalState.user : null),
  );

const makeSelectUserId = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userId,
  );

const makeSelectOrganizationId = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.organizationId,
  );

const makeSelectFullName = () =>
  createSelector(
    selectGlobal,
    globalState => {
      if (globalState.user) {
        const { firstName, lastName } = globalState.user.user;
        return `${firstName} ${lastName}`;
      }
      return '';
    },
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  makeSelectLocation,
  makeSelectUser,
  makeSelectFullName,
  makeSelectUserId,
  makeSelectOrganizationId,
};
