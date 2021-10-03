/*
 * @Author: xujian
 * @Date: 2021-10-02 21:33:00
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-03 22:59:40
 * @Description:
 * @FilePath: /music-web-react/src/pages/player/store/actionCreators.js
 */
import * as actionType from "./constant";

import { getSongDetail, getLyric } from "@/services/player";
import { getRandomNumber } from "@/utils/math-utils";
import { parseLyric } from "@/utils/parse-lyric";
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
  return (dispatch, getState) => {
    // 根据id查找playlist中是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const index = playList.findIndex((item) => item.id === ids);
    let song = null;
    //  判断是否找到歌曲
    if (index !== -1) {
      dispatch(changeCurrentSongIndexAction(index));
      song = playList[index];
      dispatch(changeCurrentSongDetailAction(song));
    } else {
      // 请求歌曲数据
      getSongDetail(ids).then((res) => {
        song = res.songs && res.songs[0];
        if (!song) return;

        // 1.将最新请求到的歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);
        // 2.更新redux的值
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));

        dispatch(changeCurrentSongDetailAction(song));
      });
    }
    // 3.请求该歌曲歌词
    if (!song) return;
    dispatch(getLyricAction(song.id));
  };
};
const changePlayListAction = (playList) => ({
  type: actionType.CHANGE_PLAY_LIST,
  playList,
});

const changeCurrentSongIndexAction = (index) => ({
  type: actionType.CHANGE_CURRENT_SONG_INDEX,
  index,
});

export const changeSequenceAction = (sequence) => ({
  type: actionType.CHANGE_SEQUENCE,
  sequence,
});

export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    switch (sequence) {
      case 1:
        // 随机播放
        let randomIndex = getRandomNumber(playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length);
        }
        currentSongIndex = randomIndex;
        break;

      default:
        // 顺序播放
        currentSongIndex += tag;
        if (currentSongIndex > playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        break;
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongDetailAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
  };
};

const changLyricListAction = (lyricList) => ({
  type: actionType.CHANGE_LYRIC_LIST,
  lyricList,
});

export const getLyricAction = (id) => {
  return (dispatch) => {
    getLyric(id).then((res) => {
      console.log(res);
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changLyricListAction(lyricList));
    });
  };
};
