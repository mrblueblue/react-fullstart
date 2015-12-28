import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getChannels } from 'actions/channels';
import onSetup from 'utils/onSetup';
import compose from 'recompose/compose';

const BaseComponent = ({ channels }) => (
  <div className='navigation'>
    <p>I am the Navigation</p>
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/video'}>Video</Link></li>
      {
        channels.map((channel, index) => (
          <li key={index}>{channel}</li>
        ))
      }
    </ul>
  </div>
)

const connectToChannel = connect(
  (state) => ({channels: state.channels}),
  (dispatch) => bindActionCreators({ getChannels }, dispatch)
);

const getChannelOnSetup = onSetup(
  (self) => self.props.getChannels()
);

export const Navigation = compose(
  connectToChannel,
  getChannelOnSetup
)(BaseComponent)
