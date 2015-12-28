export default function channels(state = [], action){
  switch (action.type) {
    case 'ADD_CHANNELS':
      return state.concat(action.payload);
    default:
      return state;
  }
}
