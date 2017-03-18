import $ajax from '../ajax'
import { serverUrl } from '../utils'

export default {
  login (data) {
    return $ajax.post(serverUrl('account/login'), data)
  },
  logout () {
    return $ajax.get(serverUrl('account/logout'))
  }
}
