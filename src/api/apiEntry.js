// 添加新API后引用注册
import { LOLICON_QUERY } from "@/api/lolicon";

const APICHILD = new Map();
APICHILD.set("lolicon", LOLICON_QUERY);


// 请求数据
const globalQuery = (specify) => {
  // 是否有指定api
  if (specify !== null) {
    APICHILD.forEach((val, key) => {
      if (key === specify) {
        return val()
      }
    })
  }

  // 顺序调用API
  for (let item of APICHILD.values()) {
    if (item !== null) {
      let result = item()
      if (result !== null) {
        return result;
      }
    }
  }

  // TODO: 无api可用

}

export default globalQuery







