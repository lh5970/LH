import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import product from "./views/Product.vue"
import News from './views/News.vue'
import Login from './views/Login.vue'
import Tea from './views/Tea.vue'
import Brand from './views/Brand.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/brand',
      component: Brand
    },
    {
      path: '/tea',
      component: Tea
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/product',
      component: product
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/',
      redirect:'/about'
    }
   ]
});

