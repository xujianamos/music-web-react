/*
 * @Author: xujian
 * @Date: 2021-09-25 11:03:39
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-25 23:49:10
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
