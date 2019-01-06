import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import TrackerDashboard from './views/TrackerDashboard.vue'
import DomainDashboard from './views/DomainDashboard.vue'
import ReleaseDashboard from './views/ReleaseDashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/',
          component: TrackerDashboard
        },
        {
          path: '/teams/:teamId/release/:version',
          component: ReleaseDashboard
        },
        {
          path: '/domain/:id',
          component: DomainDashboard
        }
      ]
    }
  ]
})
