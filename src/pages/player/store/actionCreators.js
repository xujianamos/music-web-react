/*
 * @Author: xujian
 * @Date: 2021-10-02 21:33:00
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-02 21:58:26
 * @Description:
 * @FilePath: /music-web-react/src/pages/player/store/actionCreators.js
 */
import * as actionType from "./constant";

import { getSongDetail } from "@/services/player";
/**
 * @description: 存储数据的action
 * @param {*}
 * @return {*}
 */
const changeCurrentSongDetailAction = (res) => ({
  type: actionType.CHANGE_CURRENT_SONG,
  currentSong: res,
});
/**
 * @description: 发起网络请求获取音乐详情
 * @param {*}
 * @return {*}
 */
export const getSongDetailAction = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      dispatch(changeCurrentSongDetailAction(res.songs[0]));
    });
  };
};
