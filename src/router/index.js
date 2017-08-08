import Vue from 'vue'
import Router from 'vue-router'
import flexDrag from '@/components/flex-drag/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'flexDrag',
      component: flexDrag
    }
  ]
})
