/*
 * @Author: xujian
 * @Date: 2021-09-24 21:31:06
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-25 23:45:10
 * @Description:推荐页面
 * @FilePath: /music-web-react/src/pages/discover/c-pages/recommend/index.js
 */
import React, { memo } from "react";
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
// 轮播图组件
import TopBaner from "./c-cpns/top-baner/index";
// 推荐模块组件
import HYHotRecommend from "./c-cpns/hot-recommend";
import HYRecommendRanking from "./c-cpns/recommend-ranking";
import HYNewAlbum from "./c-cpns/new-album";
// 优化版本
function HYRecommend(props) {
  return (
    <RecommendWraper>
      {/* 轮播图 */}
      <TopBaner></TopBaner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HYHotRecommend></HYHotRecommend>
          <HYNewAlbum></HYNewAlbum>
          <HYRecommendRanking></HYRecommendRanking>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  );
}

export default memo(HYRecommend);
