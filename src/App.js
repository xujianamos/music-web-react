import React, { memo } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "@/router";
// 组件相关
import HYAppHeader from "@/components/app-header";
import HYAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    // 使用hash路由
    <HashRouter>
      {/* 头部组件 */}
      <HYAppHeader />
      {/* 路由组件 */}
      {renderRoutes(routes)}
      {/* 底部组件 */}
      <HYAppFooter />
    </HashRouter>
  );
});
