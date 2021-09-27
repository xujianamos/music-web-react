/*
 * @Author: xujian
 * @Date: 2021-09-25 23:40:00
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-27 23:14:21
 * @Description:
 * @FilePath: /music-web-react/src/pages/discover/c-pages/recommend/c-cpns/recommend-ranking/index.js
 */
import React, { memo, useEffect } from "react";

import { RankingWrapper } from "./style";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopListAction } from "../../store/actionCreators";

import HYTopRanking from "@/components/top-ranking";

export default memo(function HYRecommendRanking() {
  const dispath = useDispatch();
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommends", "upRanking"]),
      newRanking: state.getIn(["recommends", "newRanking"]),
      originRanking: state.getIn(["recommends", "originRanking"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispath(getTopListAction(0));
    dispath(getTopListAction(2));
    dispath(getTopListAction(3));
  }, [dispath]);

  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单"></HYThemeHeaderRCM>
      <div className="tops">
        <HYTopRanking info={upRanking}></HYTopRanking>
        <HYTopRanking info={newRanking}></HYTopRanking>
        <HYTopRanking info={originRanking}></HYTopRanking>
      </div>
    </RankingWrapper>
  );
});
