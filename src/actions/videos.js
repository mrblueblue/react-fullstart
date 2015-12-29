import * as DM_API from 'utils/dm-api'

export const addHomeVideos = (videos, error) => ({
  type: 'ADD_HOME_VIDEOS',
  payload: videos,
  error: error
})

export const getHomeVideos = (page) => (dispatch) => (
  DM_API.getHomeVideos(page)
    .end((err, res) => {
      const videos = res.body.list;
      dispatch(addHomeVideos(videos, err))
    })
)
