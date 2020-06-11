import { request } from "./index";

export function getDetail(id) {
  return request({
    url: "/detail",
    params: {
      id
    }
  });
}
