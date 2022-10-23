import request from '../utils/request/request'

export function getTopBanners(params) {
  return request({
    url:'/banner',
    method:'get'
  })
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}