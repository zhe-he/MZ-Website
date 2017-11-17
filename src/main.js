import Vue from 'vue';
import store from './store';
import router from './router';
import App from './app';
import mzHead from './modules/mz-head';
import mzFoot from './modules/mz-foot';

Vue.component('mz-head',mzHead);
Vue.component('mz-foot',mzFoot);

new Vue({
    el: "#app",
    router,
    store,
    render: h=>h(App)
})

