import Vue from 'vue';
import App from './App';
import router from './router';
import api from './api'

Vue.config.productionTip = false;
Vue.use(api);

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
