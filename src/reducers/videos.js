
const initialState = {
  list: [],
  selected: {}
}

export default function videos(state = initialState, action){
  switch (action.type) {
    case 'ADD_VIDEOS':
      return Object.assign({}, state, {
        page: action.payload.page,
        list: state.list.concat(action.payload.videos)
      });
    default:
      return state;
  }
}
