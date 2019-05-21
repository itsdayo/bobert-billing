/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import HomePage from 'containers/HomePage/Loadable';
import BillingPage from 'containers/BillingPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import TopMenu from 'components/TopMenu';
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';
import GlobalStyle from '../../global-styles';
import { makeSelectFullName, makeSelectLocation } from './selectors';

function App({ fullName, location }) {
  useInjectSaga({ key: 'app', saga });

  return (
    <div>
      <TopMenu fullName={fullName} location={location} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/billing" component={BillingPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  fullName: PropTypes.string,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  fullName: makeSelectFullName(),
  location: makeSelectLocation(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(App);
