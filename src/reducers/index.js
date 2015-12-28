import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';
import channels from 'reducers/channels';

const rootReducer = combineReducers({
  channels,
  router
})

export default rootReducer
