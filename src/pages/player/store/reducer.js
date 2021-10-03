/*
 * @Author: xujian
 * @Date: 2021-10-02 21:33:09
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-03 22:57:29
 * @Description:
 * @FilePath: /music-web-react/src/pages/player/store/reducer.js
 */
import { Map } from "immutable";
import * as actionType from "./constant";
const defaultState = Map({
  playList: [], // 播放列表
  currentSongIndex: 0, // 当前播放的歌曲索引
  currentSong: {},
  sequence: 0, // 0循环，1随机，2单曲
  lyricList: [], // 歌词
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
      break;
    case actionType.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionType.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionType.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionType.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    default:
      return state;
      break;
  }
}
export default reducer;
