/*
 * @Author: xujian
 * @Date: 2021-09-25 23:07:38
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-26 21:34:06
 * @Description:
 * @FilePath: \music-web-react\src\pages\discover\c-pages\recommend\c-cpns\hot-recommend\index.js
 */
import React, { memo, useEffect } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import HYSongsCover from "@/components/songs-cover";

import { HotRecommendWrapper } from "./style";

import { getHotRecommendAction } from "../../store/actionCreators";

import { HOT_RECOMMEND_LIMIT } from "@/constant/constant";
export default memo(function HYHotRecommend() {
  /**
   * state相关
   */
  /**
   * redux hooks
   */
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommends", "hotRecommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  /**
   * 其他hooks
   */
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, []);
  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      ></HYThemeHeaderRCM>
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <HYSongsCover key={item.id} info={item}></HYSongsCover>;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
