/*
 * @Author: xujian
 * @Date: 2021-09-24 22:55:19
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-02 21:37:17
 * @Description:
 * @FilePath: /music-web-react/src/store/reducer.js
 */
// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/store";
import { reducer as playerReducer } from "../pages/player/store";

const cReducer = combineReducers({
  recommends: recommendReducer,
  player: playerReducer,
});
export default cReducer;
