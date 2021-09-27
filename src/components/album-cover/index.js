/*
 * @Author: xujian
 * @Date: 2021-09-27 21:09:37
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-27 22:21:39
 * @Description:
 * @FilePath: /music-web-react/src/components/album-cover/index.js
 */
import React, { memo } from "react";

import { AlbumWrapper } from "./style";

import { getSizeImage } from "@/utils/data-format";
export default memo(function HYAlbumCover(props) {
  const { info, size = 130, width = "153", bgp = "-845px" } = props;
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      {/* 图片容器 */}
      <div className="album-image">
        {/* 图片 */}
        <img src={getSizeImage(info.picUrl, size)} />
        <a href="/#" className="cover sprite_covor"></a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
});
