/*
 * @Author: xujian
 * @Date: 2021-09-27 23:05:15
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-27 23:24:36
 * @Description:
 * @FilePath: /music-web-react/src/components/top-ranking/index.js
 */
import React, { memo } from "react";
import { TopRankingWrapper } from "./style";
import { getSizeImage } from "@/utils/data-format";

export default memo(function HYTopRanking(props) {
  const { info } = props;
  const { tracks = [] } = info;
  return (
    <TopRankingWrapper>
      <div className="header">
        {/* 左侧图片 */}
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} />
          <a href="/#" className="image_cover">
            ranking
          </a>
        </div>
        {/* 右侧信息 */}
        <div className="info">
          <a href="/#">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
});
