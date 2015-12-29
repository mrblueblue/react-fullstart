import * as DM_API from 'utils/dm-api'

export const addVideos = (videos, page, error) => ({
  type: 'ADD_VIDEOS',
  payload: {
    videos,
    page
  },
  error: error
})

export const updateSelectedVideo = (index, video, error) => ({
  type: 'UPDATE_SELECTED_VIDEO',
  payload: {
    index,
    video
  },
  error: error
})

export const selectVideo = (index) => ({
  type: 'SELECT_VIDEO',
  payload: {
    index
  }
})

export const getVideos = (currentPage) => (dispatch) => (
  DM_API.getVideos(currentPage)
    .end((err, res) => {
      const videos = res.body.list;
      const nextPage = currentPage ? res.body.page + 1 : 2
      dispatch(addVideos(videos, nextPage, err))
    })
)

export const getVideoInfo = (id, index) => (dispatch) => (
  DM_API.getVideoInfo(id)
    .end((err, res) => {
      const video = res.body;
      dispatch(updateSelectedVideo(index, video, err))
    })
)
