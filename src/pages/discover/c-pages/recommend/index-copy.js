/*
 * @Author: xujian
 * @Date: 2021-09-24 21:31:06
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-25 19:10:11
 * @Description:推荐页面
 * @FilePath: /music-web-react/src/pages/discover/c-pages/recommend/index copy.js
 */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTopBannerAction } from "./store/actionCreators";
// 优化版本
function HYRecommend(props) {
  // 组件和redux关联：获取数据和进行操作
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get("recommends").get("topBanners"),
      // 优化写法
      topBanners: state.getIn(["recommends", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // 发送网络请求
  useEffect(() => {
    // console.log(topBanners);
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return <div>推荐{topBanners.length}</div>;
}

export default memo(HYRecommend);
// 实现方式1:
/*
function HYRecommend(props) {
  const { getBanners, topBanners } = props;
  useEffect(() => {
    getBanners();
  }, [getBanners]);
  return <div>推荐{topBanners.length}</div>;
}

const mapStateToProps = (state) => ({
  topBanners: state.recommends.topBanners,
});
const mapDispatchToProps = (dispath) => ({
  getBanners: () => {
    dispath(getTopBannerAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
*/
