/*
 * @Author: xujian
 * @Date: 2021-10-02 17:00:12
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-02 23:47:23
 * @Description:
 * @FilePath: /music-web-react/src/pages/player/app-player-bar/index.js
 */
import React, { memo, useEffect, useRef, useState, useCallback } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";

import { Slider } from "antd";

import { getSongDetailAction } from "../store/actionCreators";

import { getSizeImage, formatDate, getPlaySong } from "@/utils/data-format";
export default memo(function HYAppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChange, setIsChange] = useState(false);
  // 当前是否有在播放歌曲
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  // redux hook
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hook
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
  }, [currentSong]);
  // other handle

  const picUrl = currentSong.al && currentSong.al.picUrl;
  const singerName = currentSong.ar && currentSong.ar[0].name;
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  const playMusic = () => {
    // audioRef.current.play();
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const timeUpdate = (e) => {
    if (!isChange) {
      setCurrentTime(e.target.currentTime * 1000);

      setProgress((currentTime / duration) * 100);
    }
  };

  const sliderChange = useCallback(
    (value) => {
      setIsChange(true);
      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime);
      setProgress(value);
    },
    [duration]
  );
  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      // 解决滑动后回弹的问题
      setCurrentTime(currentTime * 1000);
      setIsChange(false);

      // 如果是暂停状态
      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic]
  );
  const handleTipFormatter = (e) => {
    // console.log(e);
    // console.log((e / 100) * duration);
    return (e / 100) * duration;
  };

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic()}
          ></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img src={getSizeImage(picUrl, 35)} alt=""></img>
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="/#" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={30}
                value={progress}
                onChange={(e) => sliderChange(e)}
                onAfterChange={(e) => sliderAfterChange(e)}
                tipFormatter={(e) => handleTipFormatter(e)}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={(e) => timeUpdate(e)}></audio>
    </PlaybarWrapper>
  );
});
