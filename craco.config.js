/*
 * @Author: xujian
 * @Date: 2021-09-11 23:55:13
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-02 21:00:19
 * @Description:
 * @FilePath: /music-web-react/craco.config.js
 */
const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  module: {
    rules: [
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },
};
