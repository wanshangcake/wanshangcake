/*
* 路由跳转权限控制
*/
import { $auth, $browser } from '@helper'

export default {
  // 检查浏览器兼容性
  checkBrowserSupport (to, from, next) {
    if (to.path === '/browser-incompatible') {
      // 手动访问浏览器不兼容提示页面时的处理
      if ($browser.checkBrowserSupport()) {
        next({
          path: '/'
        })
      } else {
        console.log('browser incompatible!')
        next()
      }
    } else if ($browser.checkBrowserSupport()) {
      next()
    } else {
      console.log('browser incompatible!')
      next({
        path: '/browser-incompatible'
      })
    }
  },
  // 检查登录态
  checkLoginAuth (to, from, next) {
    if (to.meta && to.meta.ignoreAuth) {
      next()
    } else {
      if ($auth.checkSession()) {
        next()
      } else {
        console.log('session expired!')
        next({
          path: '/login'
        })
      }
    }
  },
  // 检查页面权限
  checkPageAuth (to, from, next) {
    if (to.meta && to.meta.ignoreAuth) {
      next()
    } else {
      // check user auth here....
      next()
    }
  }
}
