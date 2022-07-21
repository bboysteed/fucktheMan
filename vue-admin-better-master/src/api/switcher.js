import request from '@/utils/request'

export async function postChange(data) {
  return request({
    url: '/post/open',
    method: 'post',
    data,
  })
}

export async function getOpen() {
  return request({
    url: '/post/getopen',
    method: 'get',
  })
}
