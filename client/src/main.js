import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import './styles.scss'
import Swal from 'sweetalert2'
import lang from 'element-ui/lib/locale/lang/pt-br'

Vue.use(ElementUI, { locale: lang })

Vue.prototype.$swal = Swal
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
