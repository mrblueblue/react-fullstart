import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getVideos } from 'actions/videos';
import compose from 'recompose/compose';
import withScroll from 'utils/withScroll'
import { ApiCollection, VideoItem } from 'components';

export const VideoCollection = ({videos, getVideos, selectVideo}) => (
  <div className='home-page'>
    <ApiCollection
      fetch={getVideos}
      data={videos}
      RowItem={VideoItem}
    />
  </div>
)

const connectToHome = connect(
  (state) => ({ videos: state.videos.list, page: state.videos.page }),
  (dispatch) => bindActionCreators({ getVideos }, dispatch)
)

const fetchVideosOnScroll = withScroll(
  (self) => self.props.getVideos(self.props.page),
  700
)

export const Home = compose(
  connectToHome,
  fetchVideosOnScroll
)(VideoCollection)
