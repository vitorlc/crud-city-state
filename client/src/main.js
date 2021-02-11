import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import './styles.scss'
import Swal from 'sweetalert2'
import lang from 'element-ui/lib/locale/lang/pt-br'

Vue.use(ElementUI, { locale: lang })

Vue.prototype.$swal = Swal
Vue.config.productionTip = false

Vue.config.errorHandler = (err, vm, info) => {
  // err: error trace
  // vm: component in which error occured
  // info: Vue specific error information such as lifecycle hooks, events etc.
  if(err?.response?.data?.error)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${err.response.data.msg}`,
    })
};

new Vue({
  render: h => h(App),
}).$mount('#app')
