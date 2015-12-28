import lifecycle from 'recompose/lifecycle';

export default function onSetup(callback){
  return lifecycle(
    callback,
    () => null
  )
}
