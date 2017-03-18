import Vue from 'vue'


import App from './App'
import router from './router'

Vue.config.productionTip = false

// MuseUI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)


// i18n
import Cookies from 'js-cookie'
import VueI18n from 'vue-i18n'
import locales from './locales'
const browserLanguage = (window.navigator.language || window.navigator.browserLanguage).split('-')[0]
const lang = Cookies.get('lang') || browserLanguage in locales ? browserLanguage : 'en'
Vue.use(VueI18n)
Vue.config.lang = lang
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})


// Filter
import Filters from './filters'
for (let key in Filters) {
  Vue.filter(key, Filters[key])
}

// global components
import Icon from '@components/Icon'
Vue.component('icon', Icon)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
