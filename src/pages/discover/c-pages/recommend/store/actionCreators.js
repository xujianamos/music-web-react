/*
 * @Author: xujian
 * @Date: 2021-09-24 23:17:13
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-27 23:04:25
 * @Description:
 * @FilePath: /music-web-react/src/pages/discover/c-pages/recommend/store/actionCreators.js
 */
import * as actionType from "./constants";
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList,
} from "@/services/recommend";
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
/**
 * @description: 存储新碟上架数据action
 * @param {*}
 * @return {*}
 */
const changeNewAlbumAction = (res) => ({
  type: actionType.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
});
/**
 * @description: 发起网络请求获取新碟上架数据
 * @param {*}
 * @return {*}
 */
export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

/**
 * @description: 存储榜单数据
 * @param {*}
 * @return {*}
 */
const changeUpRankingAction = (res) => ({
  type: actionType.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});
const changeNewRankingAction = (res) => ({
  type: actionType.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});

const changeOriginRankingAction = (res) => ({
  type: actionType.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});
/**
 * @description: 发起网络请求获取榜单数据
 * @param {*}
 * @return {*}
 */
export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res));
          break;
        case 2:
          dispatch(changeNewRankingAction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
          break;
      }
    });
  };
};
