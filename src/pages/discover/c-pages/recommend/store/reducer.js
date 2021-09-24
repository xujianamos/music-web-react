/*
 * @Author: xujian
 * @Date: 2021-09-24 23:16:38
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-24 23:27:17
 * @Description:推荐页面的reducer
 * @FilePath: /music-web-react/src/pages/discover/c-pages/recommend/store/reducer.js
 */
import * as actionTypes from "./constants";
const defaultState = {
  topBanners: [],
};
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: [] };
      break;
    default:
      return { ...state };
      break;
  }
}
export default reducer;
