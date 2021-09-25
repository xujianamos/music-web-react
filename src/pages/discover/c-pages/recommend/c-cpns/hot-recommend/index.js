/*
 * @Author: xujian
 * @Date: 2021-09-25 23:07:38
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-25 23:59:41
 * @Description:
 * @FilePath: /music-web-react/src/pages/discover/c-pages/recommend/c-cpns/hot-recommend/index.js
 */
import React, { memo, useEffect } from "react";

import { useDispatch } from "react-redux";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";

import { HotRecommendWrapper } from "./style";

import { getHotRecommendAction } from "../../store/actionCreators";

export default memo(function HYHotRecommend() {
  /**
   * state相关
   */
  /**
   * redux hooks
   */
  const dispatch = useDispatch();
  /**
   * 其他hooks
   */
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, []);
  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      ></HYThemeHeaderRCM>
    </HotRecommendWrapper>
  );
});
