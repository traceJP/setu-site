import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // 超时限制
  timeout: 10000,
})

// request拦截器
service.interceptors.request.use(config => {
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?';
    for (const propName of Object.keys(config.params)) {
      const value = config.params[propName];
      var part = encodeURIComponent(propName) + "=";
      if (value !== null && typeof(value) !== "undefined") {
        if (typeof value === 'object') {
          for (const key of Object.keys(value)) {
            let params = propName + '[' + key + ']';
            var subPart = encodeURIComponent(params) + "=";
            url += subPart + encodeURIComponent(value[key]) + "&";
          }
        } else {
          url += part + encodeURIComponent(value) + "&";
        }
      }
    }
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    return res.data
  },
  error => {

    return Promise.reject(error)
  }
)

// 通用下载方法
// export function download(url, params, filename) {
//   return service.post(url, params, {
//     transformRequest: [(params) => {
//       return tansParams(params)
//     }],
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     responseType: 'blob'
//   }).then((data) => {
//     const content = data
//     const blob = new Blob([content])
//     if ('download' in document.createElement('a')) {
//       const elink = document.createElement('a')
//       elink.download = filename
//       elink.style.display = 'none'
//       elink.href = URL.createObjectURL(blob)
//       document.body.appendChild(elink)
//       elink.click()
//       URL.revokeObjectURL(elink.href)
//       document.body.removeChild(elink)
//     } else {
//       navigator.msSaveBlob(blob, filename)
//     }
//   }).catch((r) => {
//     console.error(r)
//   })
// }

export default service
