import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';

import channels from 'reducers/channels';
import videos from 'reducers/videos';


const rootReducer = combineReducers({
  videos,
  channels,
  router
})

export default rootReducer
