import Request from './request'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getHomeMultidata() {
  return Request({
    url: '/home/multidata'
  })
}
