import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import mapInit from 'highcharts/modules/map'  
import addWorldMap from './js/worldmap'
import addAuMap from './js/au-all'

Vue.config.productionTip = false



mapInit(Highcharts)
addWorldMap(Highcharts)
addAuMap(Highcharts)


Vue.use(HighchartsVue);


new Vue({
  
  router:router,
  render: h => h(App),
}).$mount('#app')
