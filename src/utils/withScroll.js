import React, { PropTypes } from 'react';
import throttle from 'lodash.throttle';
import curry from 'lodash.curry';
import lifecycle from 'recompose/lifecycle';

function withScroll(onScroll, frequency, BaseComponent){

  const onSetup = (self) => {

    self.onScroll = throttle((e) => {

      const scrollTop = window.pageYOffset;
      const scrollPosition = scrollTop + document.documentElement.clientHeight;
      const delta = document.documentElement.offsetHeight - scrollPosition;
      const limit = document.documentElement.clientHeight * 0.8;

      if (delta < limit){
        onScroll(self);
      }

    }, frequency)

    window.addEventListener('scroll', self.onScroll, false)
  }

  const onTearDown = (self) => {
    window.removeEventListener('scroll', self.onScroll, false)
  }

  return lifecycle(
    onSetup,
    onTearDown
  )(BaseComponent)
}

export default curry(withScroll)
