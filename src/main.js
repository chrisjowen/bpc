import Vue from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue-apexcharts'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueApexCharts)
Vue.use(VueRouter)

Vue.component('apexchart', VueApexCharts)


new Vue({ router }).$mount('#app')
