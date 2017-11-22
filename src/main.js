import Vue from 'vue';
import store from './store';
import router from './router';
import App from './app';
import mzHead from './modules/mz-head';
import mzFoot from './modules/mz-foot';

Vue.component('mz-head',mzHead);
Vue.component('mz-foot',mzFoot);
router.beforeEach((to, from, next) => {
    if(to.name === 'about' || to.name === 'home'){
        store.commit("setHead",1);
    }else{
        store.commit("setHead",2);
    }
    next();
});

new Vue({
    el: "#app",
    router,
    store,
    render: h=>h(App)
});
