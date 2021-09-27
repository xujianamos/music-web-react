/*
 * @Author: xujian
 * @Date: 2021-09-25 23:40:05
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-27 22:19:30
 * @Description:
 * @FilePath: /music-web-react/src/pages/discover/c-pages/recommend/c-cpns/new-album/index.js
 */
import React, { memo, useEffect, useRef } from "react";

import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Carousel } from "antd";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import HYAlbumCover from "@/components/album-cover";
import { getNewAlbumAction } from "../../store/actionCreators";

import { AlbumWrapper } from "./style";

export default memo(function HYNewAlbum() {
  const pageRef = useRef();
  /**
   * redux hooks
   */
  const dispatch = useDispatch();

  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommends", "newAlbums"]),
    }),
    shallowEqual
  );
  /**
   * hooks
   */
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架"></HYThemeHeaderRCM>
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <HYAlbumCover
                        key={iten.id}
                        info={iten}
                        size={100}
                        width={118}
                        bgp="-570px"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});
