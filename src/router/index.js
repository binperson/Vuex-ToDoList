import Router from 'vue-router'
import ListOne from '@/views/list-one/list-one'
import ListTwo from '@/views/list-two/list-two'

export default () => {
  return new Router({
    mode: 'history',
    base: '/home/',
    routes: [
      { path: '/', redirect: '/list-one' },
      {
        path: '/list-one',
        name: 'ListOne',
        component: ListOne
      },
      {
        path: '/list-two',
        name: 'ListTwo',
        component: ListTwo
      }
    ],
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  })
}
