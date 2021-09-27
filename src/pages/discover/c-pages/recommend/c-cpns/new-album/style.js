/*
 * @Author: xujian
 * @Date: 2021-09-25 23:40:10
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-26 23:46:51
 * @Description:
 * @FilePath: /music-web-react/src/pages/discover/c-pages/recommend/c-cpns/new-album/style.js
 */
import styled from "styled-components";

export const AlbumWrapper = styled.div`
  margin-top: 50px;

  .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    align-items: center;

    .arrow {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
    }

    .arrow-right {
      background-position: -300px -75px;
    }

    .album {
      width: 640px;
      height: 150px;

      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }

      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
