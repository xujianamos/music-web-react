/*
 * @Author: xujian
 * @Date: 2021-09-27 21:09:44
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-27 21:11:26
 * @Description:
 * @FilePath: /music-web-react/src/components/album-cover/style.js
 */
import styled from "styled-components";

export const AlbumWrapper = styled.div`
  width: ${(props) => props.width + "px"};

  .album-image {
    position: relative;
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${(props) => props.size + "px"};
      height: ${(props) => props.size + "px"};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props) => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props) => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`;
