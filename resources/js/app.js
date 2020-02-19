require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

//import {routes} from './routes';
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//Vue.component('home', require('./components/admin/AdminHome.vue').default);
const routes = [
     //{ path: '/foo', component: Foo },
     //{ path: '/bar', component: Bar }
   ]

const router = new VueRouter({
    routes // short for `routes: routes`
  })

const app = new Vue({
    el: '#app',router
});
