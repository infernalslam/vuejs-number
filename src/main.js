import Vue from 'vue'
import VueRouter from 'vue-router'
var VueResource = require('vue-resource')
import App from './App'
import First from './components/First'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
// /////////////////
Vue.use(VueRouter)
Vue.use(VueResource)
// /////////////////
var router = new VueRouter()
router.map({
  '/': {
    component: App
  },
  '/first': {
    component: First
  },
  '/two': {
    component: Two
  },
  '/three': {
    component: Three
  },
  '/four': {
    component: Four
  },
  '*': {
    component: Error
  }
})
router.start(App, '#app')
