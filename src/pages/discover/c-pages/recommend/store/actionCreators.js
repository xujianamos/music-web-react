/*
 * @Author: xujian
 * @Date: 2021-09-24 23:17:13
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-25 23:55:43
 * @Description:
 * @FilePath: /music-web-react/src/pages/discover/c-pages/recommend/store/actionCreators.js
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
 * @description:
 * @param {*}
 * @return {*}
 */
const changeHotRecommendAction = (res) => ({
  type: actionType.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.hotRecommends,
});
/**
 * @description:
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
