import request from '@/utils/request'

export function usergetList(data) {
  return request({
    url: '/userManagement/getList',
    method: 'post',
    data,
  })
}

export function changeName(data) {
  return request({
    url: '/userManagement/changeName',
    method: 'post',
    data,
  })
}

export function getName(data) {
  return request({
    url: '/userManagement/getName',
    method: 'post',
    data,
  })
}

export function updateIntercept(data) {
  return request({
    url: '/userManagement/updateIntercept',
    method: 'post',
    data,
  })
}

export function EditWantedMoney(data) {
  return request({
    url: '/userManagement/EditWantedMoney',
    method: 'post',
    data,
  })
}

export function doDelete(data) {
  return request({
    url: '/userManagement/doDelete',
    method: 'post',
    data,
  })
}
