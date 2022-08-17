import request from '@/utils/request'

const API = "https://api.lolicon.app/setu/v2";

export const LOLICON_QUERY = (query) => {
  return request({
    url: API,
    method: 'POST',
    params: query,
    // lolicon-api要求代理请求头
    headers: {
      "referer": 'https://www.pixiv.net',
      "host": 'https://www.pixiv.net',
    }
  })
}
