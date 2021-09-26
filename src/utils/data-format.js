/*
 * @Author: xujian
 * @Date: 2021-09-26 21:38:28
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-26 21:43:23
 * @Description:
 * @FilePath: \music-web-react\src\utils\data-format.js
 */
/**
 * @description:
 * @param {*} count
 * @return {*}
 */
export function getCount(count) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}
/**
 * @description: 获取指定图片大小
 * @param {*} imgUrl 接口url
 * @param {*} size 图片大小
 * @return {*}
 */
export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}
