import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: './login',
    name: 'Login',
    component: Login
  },{ path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = router.app.$store.state.token;
  console.log(loggedIn)
  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})
export default router
