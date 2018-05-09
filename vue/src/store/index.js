import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    roles: []
  },
  mutations: {
    logIn( state ) {
      state.loggedIn = true;
    },
    logOut( state ) {
      state.roles = [];
      state.loggedIn = false;
    },
    setRules( state, roles ) {
      roles.forEach(role => { state.roles.push(role)});
    }
  },
  plugins: [
    createPersistedState()
  ]
})
