import Vue from 'vue'
import App from "@/App.vue";
import VueRouter from 'vue-router'
import background from "@/components/background";
import frame from "@/components/frame";
import frameName from "@/components/frameName";
import mechanism from "@/components/mechanism";
import mechanismName from "@/components/mechanismName";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'background',
    component: background
  },
  {
    path: '/background',
    name: 'background',
    component: background
  },
  {
    path: '/frame',
    name: 'frame',
    component: frame
  },
  {
    path: '/frameName',
    name: 'frameName',
    component: frameName
  },
  {
    path: '/mechanism',
    name: 'mechanism',
    component: mechanism
  },
  {
    path: '/mechanismName',
    name: 'mechanismName',
    component: mechanismName
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

export default router
