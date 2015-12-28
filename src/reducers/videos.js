export default function videos(state = [], action){
  switch (action.type) {
    case 'ADD_VIDEO':
      return state.concat(action.payload);
    default:
      return state;
  }
}
