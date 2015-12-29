import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getVideoInfo } from 'actions/videos';
import compose from 'recompose/compose';
import onSetup from 'utils/onSetup';

export const BaseComponent = ({video}) => (
  <div>
    <p>{video.title}</p>
    <p>{`${video.views_total} views`}</p>
    <p>{`${video.duration} duration`}</p>
  </div>
);

const connectToSelected = connect(
  (state) => ({video: state.videos.selected}),
  (dispatch) => bindActionCreators({ getVideoInfo }, dispatch)
)

const getVideoOnSetup = onSetup(
  (self) => self.props.getVideoInfo(self.props.video.id)
)

export const Video = compose(
  connectToSelected,
  getVideoOnSetup
)(BaseComponent)
