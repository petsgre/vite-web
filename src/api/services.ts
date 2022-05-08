import { instance } from "./request"

export const getGoods = () => {
  return instance.request({
    method: "get",
    url: "/api/goods",
  })
}
