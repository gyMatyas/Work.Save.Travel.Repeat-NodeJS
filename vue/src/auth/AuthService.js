import auth0 from 'auth0-js'
import EventEmitter from 'EventEmitter'
import router from './../router'
import store from './../store/index'

export default class AuthService {

  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  auth0 = new auth0.WebAuth({
    domain: 'wstr.eu.auth0.com',
    clientID: 'g0fLszfUx1SdvuBWQiBbkFN2NS6s2JGs',
    redirectUri: 'https://work-save-travel-repeat.herokuapp.com/callback',
    audience: 'https://wstr.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile'
  })

  login () {
    this.auth0.authorize()
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        router.push('/');
        store.commit('logIn');
        this.getRoles(authResult);
      } else if (err) {
        router.replace('/');
        console.log(err)
      }
    })
  }

  setSession (authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    localStorage.setItem('name', authResult.idTokenPayload.name)
    localStorage.setItem('picture', authResult.idTokenPayload.picture)
    this.authNotifier.emit('authChange', { authenticated: true })
  }

  logout () {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('name')
    localStorage.removeItem('picture')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    store.commit('logOut');
    router.replace('/')
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  getRoles(authResult) {
    let roles = []
    this.auth0.client.userInfo(authResult.accessToken, function (err, userInfo) {
      let rolesObj = userInfo["https://work-save-travel-repeat.herokuapp.com/roles"];
       for (let i = 0; i < rolesObj.length; i++) {
         roles.push(rolesObj[i]);
       }
      store.commit("setRules", roles);
    })
  }
}
