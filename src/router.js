import Router from 'vue-router';

import home from './views/home';
import notFound from './views/404';
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
    name: 'connect',
    component: connect,
    meta: {
        keepAlive: true
    }
},{
    path: '/about',
    name: 'about',
    component: about,
    meta: {
        keepAlive: false
    }
},{
    path: '*',
    name: '404',
    component: notFound,
    meta: {
        keepAlive: false
    }
}];

export default new Router({
    mode: 'history',
    routes
});