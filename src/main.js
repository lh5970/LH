import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Header from './components/Header.vue'
import Index from './components/Index.vue'
import Footer from './components/Footer.vue'
import Product1 from './components/Product1.vue'
import News1 from './components/News1.vue'
import Login1 from './components/Login1.vue'
import Tea1 from './components/Tea1.vue'
import Brand1 from './components/Brand1.vue'
import 'animate.css'

Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.use(ElementUI)


Vue.component("header1",Header)
Vue.component("index1",Index)
Vue.component("footer1",Footer)
Vue.component("product1",Product1)
Vue.component("news1",News1)
Vue.component("login1",Login1)
Vue.component("tea1",Tea1)
Vue.component("brand1",Brand1)
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
