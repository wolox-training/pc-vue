import Vue from 'vue'
import Router from 'vue-router'

const Register = () => import('./views/Register.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    }
  ]
})
