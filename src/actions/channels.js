import * as DM_API from 'utils/dm-api'

export const addChannels = (channels, error) => ({
  type: 'ADD_CHANNELS',
  payload: channels,
  error: error
})

export const getChannels = () => (dispatch) => (
  DM_API.getChannels()
    .end((err, res) => {
      const channels = res.body.list.map((channel) => channel.name);
      dispatch(addChannels(channels, err))
    })
)
