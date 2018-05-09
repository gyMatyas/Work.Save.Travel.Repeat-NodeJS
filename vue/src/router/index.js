import Vue from 'vue'
import Router from 'vue-router'
import Articles from '@/components/Articles'
import AboutUs from '@/components/AboutUs'
import Callback from '@/components/Callback'
import Editor from '@/components/Editor'
import store from './../store'

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
    },
    {
      path: "/callback",
      name: "Callback",
      component: Callback
    },
    {
      path: "/editor",
      name: "Editor",
      component: Editor,
      beforeEnter: (to, from, next) => {
        if(store.state.roles.includes("admin") ) {
          next();
        } else {
          next(false);
        }
      }
    }
  ]
})
