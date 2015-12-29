import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getHomeVideos } from 'actions/videos';
import onSetup from 'utils/onSetup';
import compose from 'recompose/compose';

import { ApiCollection, VideoItem } from 'components';

export const VideoCollection = ({videos, getHomeVideos}) => (
  <div>
    <ApiCollection
      fetch={getHomeVideos}
      data={videos}
      RowItem={VideoItem}
    />
  </div>
)

export const Home = connect(
  ({videos}) => ({videos: videos.home}),
  (dispatch) => bindActionCreators({ getHomeVideos }, dispatch)
)(VideoCollection)
