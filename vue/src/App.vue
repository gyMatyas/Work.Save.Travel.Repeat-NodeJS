<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-light navbar-expand-md sticky-top order-2 navbar-dark" style="position:fixed;width:100%;">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
            <img class="img-fluid"
                 src="static/img/inverted_logo.png" width="50vw"
                 id="logo"
                 style="padding:0;margin:15px 15px;">
            <strong class="d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline">Work. Save. Travel. Repeat.</strong>
          </router-link>
          <button
            class="navbar-toggler float-left" data-toggle="collapse" data-target="#navcol-1"
            style="position:fixed;top:10px;right:5px;"><span class="sr-only">Toggle navigation</span><span
            class="navbar-toggler-icon custom-toggler"></span></button>
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="nav navbar-nav">
              <li class="nav-item" role="presentation"><router-link class="nav-link active" to="aboutUs">About us</router-link></li>
              <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Travels</a></li>
              <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Contact</a></li>
            </ul>
            <v-spacer></v-spacer>
            <ul class="nav navbar-nav align-items-center">

              <li
                class="nav-item" role="presentation"
                v-if="!authenticated">
                <a class="nav-link active pointer" @click="login()">Log In</a>
              </li>

              <li v-if="authenticated" class="nav-item nav-link active" role="presentation">
                <v-avatar
                :size="40"
                color="grey lighten-4"
              >
                <img v-bind:src="getUserProfileImage" alt="avatar">
              </v-avatar>
              </li>

              <li v-if="authenticated" class="nav-item nav-link active" role="presentation"> {{ getUserFullName }}</li>

              <li
                class="nav-item" role="presentation"
                v-if="authenticated">
                <a class="nav-link active pointer" @click="logout()">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view
        :auth="auth"
        :authenticated="authenticated">
      </router-view>
    </div>
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
    },
    computed: {
      getUserFullName: function () {
        return localStorage.getItem("name")
      },
      getUserProfileImage: function () {
        return localStorage.getItem("picture")
      }
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

  .pointer {
    cursor: pointer;
  }
</style>
