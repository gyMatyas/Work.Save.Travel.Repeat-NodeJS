<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Auth0 - Vue</a>

            <router-link :to="'/'"
                         class="btn btn-primary btn-margin">
              Home
            </router-link>

            <button
              class="btn btn-primary btn-margin"
              v-if="!authenticated"
              @click="login()">
              Log In
            </button>

            <button
              class="btn btn-primary btn-margin"
              v-if="authenticated"
              @click="logout()">
              Log Out
            </button>

          </div>
        </div>
      </nav>

      <div class="container">
        <router-view
          :auth="auth"
          :authenticated="authenticated">
        </router-view>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

import AuthService from './auth/AuthService'
const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'App',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
