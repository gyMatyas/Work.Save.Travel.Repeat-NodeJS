import Vue from 'vue'
import Router from 'vue-router'
import Articles from '@/components/Articles'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Articles',
      component: Articles
    },
    {
      path: "/aboutUs",
      name: "AboutUs",
      component: AboutUs
    }
  ]
})
