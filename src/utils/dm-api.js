import request from 'superagent'

const fields = {
  home: ['name'],
  video: ['name'],
  channel: ['name']
}

export const getHomeVideos = (page) => (
  request
    .get('https://api.dailymotion.com/videos')
    .query({fields: fields.home})
    .query({page: page})
    .query({limit: 20})
)

export const getVideoInfo = (id) => (
  request
    .get(`https://api.dailymotion.com/video/${id}`)
    .query({fields: fields.video})
)

export const getChannels = () => (
  request
    .get('https://api.dailymotion.com/channels')
    .query({fields: fields.channel})
    .query({page: 1})
    .query({sort: 'popular'})
    .query({limit: 100})
)
