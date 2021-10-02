/*
 * @Author: xujian
 * @Date: 2021-09-11 23:27:33
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-02 17:02:06
 * @Description:程序入口
 * @FilePath: /music-web-react/src/App.js
 */
import React, { memo } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import routes from "@/router";
import store from "@/store";
// 组件相关
import HYAppHeader from "@/components/app-header";
import HYAppFooter from "@/components/app-footer";
import HYAppPlayerBar from "@/pages/player/app-player-bar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        {/* 头部组件 */}
        <HYAppHeader />
        {/* 路由组件 */}
        {renderRoutes(routes)}
        {/* 底部组件 */}
        <HYAppFooter />
        {/* 播放工具栏 */}
        <HYAppPlayerBar />
      </HashRouter>
    </Provider>
  );
});
