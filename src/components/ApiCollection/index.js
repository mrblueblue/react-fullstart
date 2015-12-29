import React, { PropTypes } from 'react'
import onSetup from 'utils/onSetup';
import { List } from 'components/List';
import compose from 'recompose/compose';
import setPropTypes from 'recompose/setPropTypes';

export const _propTypes = {
  data: PropTypes.array.isRequired,
  fetch: PropTypes.func.isRequired,
  RowItem: PropTypes.func.isRequired
}

export const ApiContainer = onSetup(
  (self) => self.props.fetch()
)

export const BaseElement = ({data, RowItem}) => (
  <List data={data} RowItem={RowItem} />
)

export const ApiCollection = compose(
  setPropTypes(_propTypes),
  ApiContainer
)(BaseElement);
