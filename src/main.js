import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'
import { routes } from './routes'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const config = {
  apiKey: "AIzaSyDPjEaIGz4oOAVt82EIS9uJc4FA7YT1o7I",
  authDomain: "testfb-mp.firebaseapp.com",
  databaseURL: "https://testfb-mp.firebaseio.com",
  projectId: "testfb-mp",
  storageBucket: "testfb-mp.appspot.com",
  messagingSenderId: "488296312838"
};
firebase.initializeApp(config);

Vue.use(VueRouter)
Vue.use(BootstrapVue)
const router = new VueRouter({routes})

new Vue({
  el: '#app',
  render: h => h(App),
  firebase,
  router
})
