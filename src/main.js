import DefaultLayout from '~/layouts/Default.vue'

import { BootstrapVue, BIcon, BIconSearch, BIconLink45deg} from 'bootstrap-vue'
import './assets/styles/main.scss'

import VueLuxon from "vue-luxon"

import VuePaginate from 'vue-paginate'

import vSelect from "vue-select"
// import "vue-select/dist/vue-select.css"

import VueDisqus from 'vue-disqus'

import Clipboard from 'v-clipboard'

import checkIfMobile from './mixins/checkIfMobile'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.component('BIcon', BIcon)
  Vue.component('BIconSearch', BIconSearch)
  Vue.component('BIconLink45deg', BIconLink45deg)

  Vue.use(VuePaginate)

  Vue.use(VueLuxon, {
    input: {
        format: "sql"
    },
    output: "date_short"
  });

  Vue.component("v-select", vSelect)

  Vue.use(VueDisqus)

  Vue.use(Clipboard)

  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
}
