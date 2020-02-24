import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import Page from './index.vue'

// import VueRouter from 'vue-router'
// import Product from './views/product.vue'
// import Contact from './views/contact.vue'

// Vue.use(VueRouter)
// const router = new VueRouter({
//   mode: 'history', // 去掉URL中的井号
//   routes: [
//     { path: '/', component: Product },
//     { path: '/product', component: Product },
//     { path: '/contact', component: Contact },
//   ]
// })

Vue.config.productionTip = false

Vue.use(Vuetify);
const vuetify = new Vuetify({
  icons: {
      iconfont: 'mdiSvg',
  }
})

new Vue({
  // router:router,
  vuetify:vuetify,
  render: h => h(Page),
}).$mount('#app')
