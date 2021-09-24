/*
 * @Author: xujian
 * @Date: 2021-09-24 22:55:19
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-24 23:25:10
 * @Description:
 * @FilePath: /music-web-react/src/store/reducer.js
 */
import { combineReducers } from "redux";
import { reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/store";
const cReducer = combineReducers({
  recommends: recommendReducer,
});
export default cReducer;
