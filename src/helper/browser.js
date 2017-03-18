const ua = window.navigator.userAgent

export default {
  checkBrowserSupport () {
    return !this.checkIE()
  },
  checkIE () {
    let msie = ua.indexOf('MSIE ')

    if (msie > 0) {
      // IE10及以下版本
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
    } else if (ua.indexOf('Trident/') > 0) {
      // IE11
      return 11
    } else if (ua.indexOf('Edge') > 0) {
      // IE 12+
      let edge = ua.indexOf('Edge/')
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
    } else {
      return false
    }
  }
}
