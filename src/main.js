import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import VueDayjs from 'vue-dayjs-plugin';
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';
import VueFilterDateParse from '@vuejs-community/vue-filter-date-parse';
import './plugins/dayjs'

Vue.config.productionTip = false;

Vue.use(VueDayjs);
Vue.use(VueAxios, axios);
Vue.use(VueFilterDateParse);
Vue.use(VueFilterDateFormat, {
  dayOfWeekNames: [
    'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves',
    'Viernes', 'Sabado'
  ],
  dayOfWeekNamesShort: [
    'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'
  ],
  monthNames: [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Augusto', 'Septiembre', 'Octobre', 'Noviembere', 'Deciembere'
  ],
  monthNamesShort: [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  // Timezone offset, in minutes (0 - UTC, 180 - Russia, undefined - current)
  timezone: 0
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
