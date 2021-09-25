/*
 * @Author: xujian
 * @Date: 2021-09-25 19:03:51
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-25 22:21:07
 * @Description:
 * @FilePath: /music-web-react/src/pages/discover/c-pages/recommend/c-cpns/top-baner/index.js
 */
import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTopBannerAction } from "../../store/actionCreators";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

import { Carousel } from "antd";

export default memo(function HYTopBanner() {
  /**
   * state
   */
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef();
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
  /**
   * 事件方法
   */
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);
  /**
   * 其他业务逻辑
   */
  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        {/* 右侧下载图片 */}
        <BannerRight></BannerRight>
        {/* 轮播图左右切换箭头 */}
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          >
            {" "}
          </button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
