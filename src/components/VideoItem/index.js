import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectVideo } from 'actions/videos';
import { Link } from 'react-router';

export const BaseComponent = ({title, id, selectVideo, index}) => (
  <div>
    <Link onClick={()=>selectVideo(index)} to={`video/${id}`}>
    {title}
    </Link>
  </div>
)

export const VideoItem = connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({ selectVideo }, dispatch)
)(BaseComponent)
