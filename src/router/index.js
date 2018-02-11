import Vue from 'vue'
import Router from 'vue-router'
import ElementUi from 'element-ui'
import Index from '@/views/Index'
import '@/styles/common.styl'

Vue.use(Router)
Vue.use(ElementUi)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
