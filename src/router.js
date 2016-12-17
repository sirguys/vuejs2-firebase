import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import Home from './components/Home'
import Profile from './components/Profile'
import ProfileEdit from './components/ProfileEdit'
import User from './components/User'
import SignIn from './components/SignIn'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/profile/edit', component: ProfileEdit, meta: { requiresAuth: true } },
    { path: '/user/:id', component: User },
    { path: '/signin', component: SignIn }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    const cancle = firebase.auth().onAuthStateChanged((user) => {
      cancle()
      if (user) {
        next()
        return
      }
      next({ path: '/signin', query: { redirect: to.fullPath } })
    })
    return
  }
  next()
})

export default router
