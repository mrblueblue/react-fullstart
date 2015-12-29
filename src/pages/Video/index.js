import React from 'react';
import { connect } from 'react-redux';

export const BaseComponent = (props) => (
  <div>
    <p>{props.params.id}</p>
    <p>Honey, I'm Video</p>
  </div>
);

export const Video = connect(
  (state) => {
    console.log(state)
    return ({video: state.videos.selected})
  }
)(BaseComponent)
