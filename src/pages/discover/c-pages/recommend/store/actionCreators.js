/*
 * @Author: xujian
 * @Date: 2021-09-24 23:17:13
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-26 21:09:04
 * @Description:
 * @FilePath: \music-web-react\src\pages\discover\c-pages\recommend\store\actionCreators.js
 */
import * as actionType from "./constants";
import { getTopBanners, getHotRecommends } from "@/services/recommend";
/**
 * @description:存储数据的action
 * @param {*}
 * @return {*}
 */
const changeTopBannerAction = (res) => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

/**
 * @description:发起网络请求的action
 * @param {*}
 * @return {*}
 */
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      // console.log(res);
      // 派发action
      dispatch(changeTopBannerAction(res));
    });
  };
};
/**
 * @description:修改推荐数据
 * @param {*}
 * @return {*}
 */
const changeHotRecommendAction = (res) => ({
  type: actionType.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});
/**
 * @description:发起网络请求获取推荐数据
 * @param {*}
 * @return {*}
 */
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};
