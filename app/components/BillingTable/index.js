import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Table from 'components/Table';
import SelectDropdown from 'components/SelectDropdown';
import styled from 'styled-components';
import { DOCUMENT_TYPES } from './constants';

const LocationCell = styled.div`
  display: flex;
  flex-direction: column;
`;

const LocationNameText = styled.span`
  padding-bottom: 5px;
`;

const LocationAddressText = styled.span`
  font-size: 12px;
  opacity: 0.5;
`;

const RefundedText = styled.span`
  color: #2ebd7a;
`;

function makeData(items) {
  return items ? Object.keys(items).map(key => items[key]) : [];
}
function createSelectOptions(documents) {
  return (
    documents &&
    documents.map(doc => ({
      title: DOCUMENT_TYPES[doc.type],
      value: doc.url,
    }))
  );
}

function onTitleClick({ value }) {
  window.open(value, '_newtab');
}

function BillingTable({ billingItems }) {
  const columns = [
    {
      Header: 'Date',
      accessor: d => moment(d.date).format('L'),
      width: 115,
      canGroupBy: false,
    },
    {
      Header: 'Shipment',
      accessor: 'shipmentReferenceNumber',
      width: 115,
      canGroupBy: false,
    },
    {
      Header: 'Locations',
      id: 'pickupLocation',
      width: 235,
      canGroupBy: false,
      Cell: cellData => {
        const { pickupLocation } = cellData.row.original;
        const { name, city, state, zip } = pickupLocation;
        const address = `${city}, ${state} ${zip}`;
        return (
          <LocationCell>
            <LocationNameText>{name}</LocationNameText>
            <LocationAddressText>{address}</LocationAddressText>
          </LocationCell>
        );
      },
    },
    {
      Header: '',
      accessor: d => d.deliveryLocation.name,
      id: 'deliveryLocation',
      width: 235,
      canGroupBy: false,
      Cell: cellData => {
        const { deliveryLocation } = cellData.row.original;
        const { name, city, state, zip } = deliveryLocation;
        const address = `${city}, ${state} ${zip}`;
        return (
          <LocationCell>
            <LocationNameText>{name}</LocationNameText>
            <LocationAddressText>{address}</LocationAddressText>
          </LocationCell>
        );
      },
    },
    {
      Header: 'Reference',
      accessor: 'referenceNumber',
      width: 250,
      canGroupBy: false,
    },
    {
      Header: 'Amount',
      accessor: 'amount',
      width: 100,
      canGroupBy: false,
      Cell: cellData => {
        const { amount, refunded } = cellData.row.original;
        let amountText = new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD',
        }).format(amount);

        if (refunded) {
          amountText = <RefundedText>({amountText})</RefundedText>;
        }
        return <div>{amountText}</div>;
      },
    },
    {
      Header: 'Documents',
      accessor: 'documents',
      width: 120,
      canGroupBy: false,
      Cell: cellData => {
        const { documents } = cellData.row.original;

        return (
          <SelectDropdown
            defaultTitle="View Docs"
            onTitleClick={onTitleClick}
            options={createSelectOptions(documents)}
          />
        );
      },
    },
  ];

  return (
    <Table
      {...{
        data: makeData(billingItems),
        columns,
        showPagination: false,
      }}
    />
  );
}

BillingTable.propTypes = {
  billingItems: PropTypes.object,
};

export default BillingTable;
