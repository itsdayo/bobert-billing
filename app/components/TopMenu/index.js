/**
 *
 * TopMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Logo from 'components/Logo';
import DownArrow from 'components/DownArrow';
import Icon from 'components/Icon';
import TopMenuBar from './TopMenuBar';
import MenuLink from './MenuLink';
import messages from './messages';
import { fadeIn } from '../../global-styles';

const LogoLink = styled.a`
  padding: 0;
  margin-bottom: 4px;
`;

const LeftSideMenu = styled.div`
  flex: auto;
`;

const RightSideText = styled.span`
  color: #fff;
  padding-right: 20px;
  font-size: 14px;
  margin-bottom: 2px;
  animation: 2s ${fadeIn} ease-in;
`;

const MenuIcon = styled.div`
  padding-left: 2px;
  padding-right: 8px;
  position: relative;
  bottom: 1.5px;
`;

const MenuArrow = styled(DownArrow)`
  margin-bottom: 1px;
  animation: 2s ${fadeIn} ease-in;
`;

function TopMenu({ fullName, location }) {
  return (
    <div>
      <TopMenuBar>
        <LogoLink href="/">
          <Logo />
        </LogoLink>

        <LeftSideMenu>
          <MenuLink highlightYellow to="/">
            <MenuIcon>
              <Icon name="plus" />
            </MenuIcon>
            <FormattedMessage {...messages.quote} />
          </MenuLink>
          <MenuLink to="/">
            <MenuIcon>
              <Icon name="tracking" />
            </MenuIcon>
            <FormattedMessage {...messages.tracking} />
          </MenuLink>
          <MenuLink
            activeNavLink={location.pathname === '/billing'}
            to="/billing"
          >
            <MenuIcon>
              <Icon name="billing" />
            </MenuIcon>
            <FormattedMessage {...messages.billing} />
          </MenuLink>
          <MenuLink to="/">
            <MenuIcon>
              <Icon name="account" />
            </MenuIcon>
            <FormattedMessage {...messages.account} />
          </MenuLink>
          <MenuLink to="/">
            <MenuIcon>
              <Icon name="help" />
            </MenuIcon>
            <FormattedMessage {...messages.help} />
          </MenuLink>
        </LeftSideMenu>
        {fullName && <RightSideText>{fullName}</RightSideText>}
        <MenuArrow secondary />
      </TopMenuBar>
    </div>
  );
}

TopMenu.propTypes = {
  fullName: PropTypes.string,
  location: PropTypes.object,
};

export default TopMenu;
