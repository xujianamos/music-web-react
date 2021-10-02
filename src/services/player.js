/*
 * @Author: xujian
 * @Date: 2021-10-02 21:38:32
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-02 21:39:46
 * @Description:
 * @FilePath: /music-web-react/src/services/player.js
 */
import request from "./request";

/**
 * @description: 获取音乐详情
 * @param {*} ids
 * @return {*}
 */
export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
}
