import request from '../utils/request/request'

export function getTopBanners(params) {
  return request({
    url:'/banner',
    method:'get'
  })
}