import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowView from "../views/ShowView.vue";
import DoubleDynamic from "../views/DoubleDynamic.vue";

// Vue 플러그인을 사용하기 위한 use() 메소드
Vue.use(VueRouter);

// 컴포넌트의 경로 설정
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 게으른 탐색 : 처음부터 가져오는 것이 아니라 실행할 때 가져옴
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/show",
    name: "show",
    component: ShowView,
  },
  {
    path: "/dynamic/:id",
    name: "dynamic",
    component: function () {
      return import("../views/DynamicView.vue");
    },
  },
  {
    path: "/doubledynamic",
    component: DoubleDynamic,
    children: [
      {
        path: ":id",
        component() {
          return import("../components/DynamicComponent.vue");
        },
      },
    ],
  },
  {
    // * 기호를 이용해 다른 경로를 받아올 수 있다
    path: "*",
    // redirect 를 사용하면 이미 작성된 경로로 이동시킬 수 있다
    redirect: "/show",
  },
];

// 네비게이션가드 확인
// router.beforeEach((to, from, next) => {
//   if (true) {
//     return next();
//   }
//   next({ path: "/show" });
// });

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes, // 라우터 경로
});

// 해당 router를 export한다 (내보낸다)
export default router;
