import React from 'react';
import App from 'containers/App';
import { Route, IndexRoute } from 'react-router';
import { Home, Video } from 'pages';

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Home}/>
    <Route path='video/:id' component={Video}/>
  </Route>
)
