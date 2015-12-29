import * as DM_API from 'utils/dm-api'

export const addVideos = (videos, page, error) => ({
  type: 'ADD_VIDEOS',
  payload: {
    videos,
    page
  },
  error: error
})

export const getVideos = (currentPage) => (dispatch) => (
  DM_API.getVideos(currentPage)
    .end((err, res) => {
      const videos = res.body.list;
      const nextPage = currentPage ? res.body.page + 1 : 2
      dispatch(addVideos(videos, nextPage, err))
    })
)
