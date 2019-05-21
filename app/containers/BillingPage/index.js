/**
 *
 * BillingPage
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import BillingTable from 'components/BillingTable';
import Dropdown from 'components/Dropdown';
import DownArrow from 'components/DownArrow';
import SearchInput from 'components/SearchInput';
import RadioButtonGroup from 'components/RadioButtonGroup';
import ListActionItem from 'components/ListActionItem';
import Line from 'components/Line';
import makeSelectBillingPage, {
  makeSelectTotalBalance,
  makeSelectBillingItems,
  makeSelectPaymentMethods,
  makeSelectDefaultPaymentMethod,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadBillingInfo } from './actions';
import { fadeIn } from '../../global-styles';

const BillingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const BillingPageHeader = styled.div`
  padding-top: 20px;
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
`;

const BillingLeftHeader = styled.div`
  flex: auto;
  flex-direction: column;
`;

const BalanceText = styled.span`
  font-size: 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  margin-bottom: 14px;
`;

const PaymentMethodSelect = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const PaymentMethodText = styled.div`
  color: #3755b0;
  font-size: 14px;
  font-weight: bold;
  margin-right: 15px;
  margin-left: 2px;
  width: 245px;
`;

const FadeIn = styled.span`
  animation: 2s ${fadeIn} ease-in;
`;

const PaymentArrow = styled(DownArrow)`
  animation: 2s ${fadeIn} ease-in;
`;

export function BillingPage({
  totalBalance,
  getBillingInfo,
  billingItems,
  paymentMethods,
  defaultPaymentMethod,
}) {
  useInjectReducer({ key: 'billingPage', reducer });
  useInjectSaga({ key: 'billingPage', saga });

  useEffect(() => {
    getBillingInfo();
  }, []);

  const [showDropdown, setDropdownVisibility] = useState(false);

  function createRadioOptions(methods) {
    if (methods) {
      const nonDefaultMethods = methods.filter(
        method => method.isDefault !== true,
      );
      return nonDefaultMethods.map(method => ({
        value: `${method.brand} *${method.last4}`,
        title: `${method.brand} *${method.last4}`,
      }));
    }
    return [];
  }

  const defaultPaymentTextString = `${defaultPaymentMethod.brand} *${
    defaultPaymentMethod.last4
  }`;

  return (
    <BillingPageWrapper>
      <BillingPageHeader>
        <BillingLeftHeader>
          <BalanceText>
            Your Balance: <FadeIn>{totalBalance}</FadeIn>
          </BalanceText>
          <PaymentMethodSelect>
            <PaymentMethodText>
              Payment Method -{' '}
              <FadeIn>
                {defaultPaymentMethod.brand && defaultPaymentTextString}
              </FadeIn>
            </PaymentMethodText>
            <PaymentArrow
              onClick={() => setDropdownVisibility(!showDropdown)}
            />
          </PaymentMethodSelect>
        </BillingLeftHeader>
        <SearchInput placeholder="Search your shipments" />
      </BillingPageHeader>
      <Dropdown showDropdown={showDropdown}>
        <RadioButtonGroup options={createRadioOptions(paymentMethods)} />
        <Line />
        <ListActionItem />
      </Dropdown>
      <BillingTable billingItems={billingItems} />
    </BillingPageWrapper>
  );
}

BillingPage.propTypes = {
  totalBalance: PropTypes.string,
  getBillingInfo: PropTypes.func,
  billingItems: PropTypes.object,
  defaultPaymentMethod: PropTypes.object,
  paymentMethods: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  billingPage: makeSelectBillingPage(),
  totalBalance: makeSelectTotalBalance(),
  billingItems: makeSelectBillingItems(),
  defaultPaymentMethod: makeSelectDefaultPaymentMethod(),
  paymentMethods: makeSelectPaymentMethods(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getBillingInfo: () => dispatch(loadBillingInfo()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(BillingPage);
