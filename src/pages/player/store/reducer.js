/*
 * @Author: xujian
 * @Date: 2021-10-02 21:33:09
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-02 21:48:21
 * @Description:
 * @FilePath: /music-web-react/src/pages/player/store/reducer.js
 */
import { Map } from "immutable";
import * as actionType from "./constant";
const defaultState = Map({
  currentSong: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
      break;

    default:
      return state;
      break;
  }
}
export default reducer;
