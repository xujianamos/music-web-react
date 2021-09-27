/*
 * @Author: xujian
 * @Date: 2021-09-25 11:03:39
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-27 22:32:21
 * @Description:推荐页面相关的网络请求
 * @FilePath: /music-web-react/src/services/recommend.js
 */
import request from "./request";
/**
 * @description: 获取轮播图
 * @param {*}
 * @return {*}
 */
export function getTopBanners() {
  return request({
    url: "/banner",
  });
}
/**
 * @description: 获取推荐数据
 * @param {*}
 * @return {*}
 */
export function getHotRecommends(limit) {
  const params = {
    limit: limit || 8,
  };
  return request({
    url: "/personalized",
    params,
  });
}
/**
 * @description: 获取新碟上架数据
 * @param {*}
 * @return {*}
 */
export function getNewAlbum(limit) {
  const params = {
    limit: limit || 8,
  };
  return request({
    url: "/top/album",
    params,
  });
}
/**
 * @description: 获取榜单数据
 * @param {*}
 * @return {*}
 */
export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx,
    },
  });
}
