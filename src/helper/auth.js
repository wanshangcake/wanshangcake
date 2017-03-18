/*
* 权限验证模块
*/
import Cookies from 'js-cookie'

export default {
  checkSession () {
    return Cookies.get('WF_LoginCookie')
  }
}
