/*
 * @Author: xujian
 * @Date: 2021-10-02 21:38:32
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-03 22:40:21
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

/**
 * @description: 获取歌词
 * @param {*}
 * @return {*}
 */
export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  });
}
