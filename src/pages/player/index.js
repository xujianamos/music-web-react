/*
 * @Author: xujian
 * @Date: 2021-10-03 15:16:19
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-03 15:25:45
 * @Description:
 * @FilePath: /music-web-react/src/pages/player/index.js
 */
import React, { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function HYPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>PlayerLeft</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>PlayerRight</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
