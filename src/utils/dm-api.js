import request from 'superagent'

const fields = {
  home: ['title', 'id'],
  video: ['duration', 'views_total'],
  channel: ['name']
}

export const getVideos = (page) => (
  request
    .get('https://api.dailymotion.com/videos')
    .query({fields: fields.home.join(',')})
    .query({page: page})
    .query({limit: 20})
)

export const getVideoInfo = (id) => (
  request
    .get(`https://api.dailymotion.com/video/${id}`)
    .query({fields: fields.video.join(',')})
)

export const getChannels = () => (
  request
    .get('https://api.dailymotion.com/channels')
    .query({fields: fields.channel})
)
