import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


// vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)
const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
})

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
