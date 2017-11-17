import Router from 'vue-router';

import home from './views/home';
const connect = r => require.ensure([], () => r(require('./views/connect')), 'connect');
const about = r => require.ensure([], () => r(require('./views/about')), 'about');

const routes = [{
    path: '/',
    name: 'home',
    component: home,
    meta: {
        keepAlive: true // 是否缓存
    }
},{
    path: '/connect',
    component: connect,
    meta: {
        keepAlive: true
    }
},{
    path: '/about',
    component: about,
    meta: {
        keepAlive: true
    }
}];

export default new Router({
    mode: 'history',
    routes
});