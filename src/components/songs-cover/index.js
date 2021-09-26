/*
 * @Author: xujian
 * @Date: 2021-09-26 21:25:15
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-26 21:44:44
 * @Description:
 * @FilePath: \music-web-react\src\components\songs-cover\index.js
 */
import React, { memo } from "react";
import { SongsCoverWrapper } from "./style";
import { getCount, getSizeImage } from "@/utils/data-format";
export default memo(function HYSongsCover(props) {
  const { info } = props;
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  );
});
