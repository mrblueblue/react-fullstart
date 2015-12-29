
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

    case 'UPDATE_SELECTED_VIDEO':
      return Object.assign({}, state, {
        selected: Object.assign({},
          state.selected,
          action.payload.video
        )
      });

    case 'SELECT_VIDEO':
      return Object.assign({}, state, {
        selected: state.list[action.payload.index]
      });

    default:
      return state;
  }
}
