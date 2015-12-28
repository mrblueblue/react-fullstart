import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';
import videos from 'reducers/videos';

const rootReducer = combineReducers({
  videos,
  router
})

export default rootReducer
