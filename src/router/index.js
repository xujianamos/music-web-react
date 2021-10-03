/*
 * @Author: xujian
 * @Date: 2021-09-12 15:33:34
 * @LastEditors: xujian
 * @LastEditTime: 2021-10-03 15:18:07
 * @Description:路由相关配置
 * @FilePath: /music-web-react/src/router/index.js
 */
import React from "react";
import HYDiscover from "@/pages/discover";
import HYRecommend from "@/pages/discover/c-pages/recommend";
import HYSongs from "@/pages/discover/c-pages/songs";
import HYRanking from "@/pages/discover/c-pages/ranking";
import HYDjradio from "@/pages/discover/c-pages/djradio";
import HYArtist from "@/pages/discover/c-pages/artist";
import HYAlbum from "@/pages/discover/c-pages/album";
import HYPlayer from "@/pages/player";

import HYFriends from "@/pages/friends";
import HYMine from "@/pages/mine";
import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: HYDiscover,
    routes: [
      {
        path: "/discover/recommend",
        component: HYRecommend,
      },
      {
        path: "/discover/songs",
        component: HYSongs,
      },
      {
        path: "/discover/ranking",
        component: HYRanking,
      },
      {
        path: "/discover/djradio",
        component: HYDjradio,
      },
      {
        path: "/discover/artist",
        component: HYArtist,
      },
      {
        path: "/discover/album",
        component: HYAlbum,
      },
      {
        path: "/discover/player",
        component: HYPlayer,
      },
    ],
  },
  {
    path: "/friend",
    component: HYFriends,
  },
  {
    path: "/mine",
    component: HYMine,
  },
];
export default routes;
