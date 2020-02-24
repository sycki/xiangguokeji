import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import Page from './product.vue'

Vue.config.productionTip = false

Vue.use(Vuetify);
const vuetify = new Vuetify({
  icons: {
      iconfont: 'mdiSvg',
  }
})

new Vue({
  vuetify:vuetify,
  render: h => h(Page)
}).$mount('#app')
