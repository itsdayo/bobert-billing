/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectUser, makeSelectFullName } from 'containers/App/selectors';
import { getUser } from 'containers/App/actions';
import { fadeIn } from '../../global-styles';

import saga from './saga';

const HomePageWrapper = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.div`
  font-size: 30px;
  animation: 2s ${fadeIn} ease-in;
  width: 600px;
`;

const TodayText = styled.span`
  animation: 2s ${fadeIn} ease-in;
  transition-delay: 3s;
`;

const Name = styled.span`
  animation: 2s ${fadeIn} ease-in;
  transition-delay: 6s;
`;

const key = 'home';

export function HomePage({ user, getCurrentUser, fullName }) {
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!user) getCurrentUser();
  });

  const today = moment().format('dddd');

  return (
    <HomePageWrapper>
      <WelcomeText>
        Welcome! <TodayText>Happy {today} </TodayText>
        <Name>{user && fullName}</Name>
      </WelcomeText>
    </HomePageWrapper>
  );
}

HomePage.propTypes = {
  getCurrentUser: PropTypes.func,
  user: PropTypes.object,
  fullName: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  fullName: makeSelectFullName(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getCurrentUser: () => dispatch(getUser()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
