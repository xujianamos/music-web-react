/*
 * @Author: xujian
 * @Date: 2021-09-24 23:16:38
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-25 23:51:48
 * @Description:推荐页面的reducer
 * @FilePath: /music-web-react/src/pages/discover/c-pages/recommend/store/reducer.js
 */
import { Map } from "immutable";
import * as actionTypes from "./constants";

/*
const defaultState = {
  topBanners: [],
};
*/
// 使用immutable修改数据
const defaultState = Map({
  topBanners: [], // 轮播图数据
  hotRecommends: [], // 推荐数据
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // 使用set方法修改值，返回一个新的对象
      return state.set("topBanners", action.topBanners);
      // return { ...state, topBanners: action.topBanners };
      break;
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
      break;
    default:
      return state;
      break;
  }
}

export default reducer;
