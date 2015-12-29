
const initialState = {
  home: [],
  related: []
}

export default function channels(state = initialState, action){
  switch (action.type) {
    case 'ADD_HOME_VIDEOS':
      return Object.assign({}, state, {
        home: state.home.concat(action.payload)});
    default:
      return state;
  }
}
