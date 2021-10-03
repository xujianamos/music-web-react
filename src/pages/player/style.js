/*
 * @Author: xujian
 * @Date: 2021-10-03 15:22:27
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-03 15:22:28
 * @Description:
 * @FilePath: /music-web-react/src/pages/player/style.js
 */
import styled from "styled-components";

export const PlayerWrapper = styled.div`
  .content {
    background: url(${require("@/assets/img/wrap-bg.png").default}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`;

export const PlayerLeft = styled.div`
  width: 710px;
`;

export const PlayerRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`;
