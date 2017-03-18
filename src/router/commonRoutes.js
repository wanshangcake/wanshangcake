/*
* 通用路由配置，需要放在配置项数组的末端
*/
import NotFound from '@views/pages/exception/NotFound'
import BrowserCompatible from '@views/pages/exception/BrowserIncompatible'

export default [
  {
    path: '/',
    meta: {
      title: '登录',
      ignoreAuth: true
    },
    component: resolve => require(['../views/pages/main'], resolve)
  },
   {
    path: '/login',
    meta: {
      title: '登录',
      ignoreAuth: true
    },
    component: resolve => require(['../views/Login'], resolve)
  },
  {
    path: '/browser-incompatible',
    meta: {
      title: '需要升级浏览器',
      ignoreAuth: true
    },
    component: BrowserCompatible
  },
  {
    path: '*',
    meta: {
      title: '页面未找到',
      ignoreAuth: true
    },
    component: NotFound
  }
]
