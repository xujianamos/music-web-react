/*
 * @Author: xujian
 * @Date: 2021-09-12 15:40:53
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-24 22:36:09
 * @Description:
 * @FilePath: /music-web-react/src/pages/discover/index.js
 */
import React, { memo } from "react";
import { DiscoverWrapper, TopMenu } from "./style";
import { dicoverMenu } from "@/common/local-data";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
export default memo(function HYDiscover(props) {
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
});
