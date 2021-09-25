/*
 * @Author: xujian
 * @Date: 2021-09-25 23:19:21
 * @LastEditors: xujian
 * @LastEditTime: 2021-09-25 23:38:42
 * @Description:
 * @FilePath: /music-web-react/src/components/theme-header-rcm/index.js
 */
import React, { memo } from "react";

import PropTypes from "prop-types";
import { HeaderWrapper } from "./style";

const HYThemeHeaderRCM = memo(function (props) {
  const { title, keywords } = props;
  return (
    <HeaderWrapper className="sprite_02">
      {/* 左侧 */}
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <a href="todo">{item}</a>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* 右侧 */}
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});

// 参数校验
HYThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array.isRequired,
};

// 参数设置默认值
HYThemeHeaderRCM.defaultProps = {
  title: "",
  keywords: [],
};
export default HYThemeHeaderRCM;
