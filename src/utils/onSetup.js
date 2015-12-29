import lifecycle from 'recompose/lifecycle';
import curry from 'lodash.curry';

const onSetup = (callback, BaseComponent) => (
  lifecycle(
    callback,
    () => null
  )(BaseComponent)
)

export default curry(onSetup)
