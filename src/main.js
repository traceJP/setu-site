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
Vue.use(Vuetify)

new Vue({
  render: h => h(App),
}).$mount('#app')
