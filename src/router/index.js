import HYDiscover from "@/pages/discover";
import HYFriends from "@/pages/friends";
import HYMine from "@/pages/mine";

const routes = [
  {
    path: "/",
    exact: true,
    component: HYDiscover,
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
