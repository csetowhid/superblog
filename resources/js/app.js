require('./bootstrap');
window.Vue = require('vue');

import 'v-markdown-editor/dist/index.css';
import Editor from 'v-markdown-editor'

// global register
Vue.use(Editor);


import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from "./store/index"

const store = new Vuex.Store(
  storeData
)

import {filter} from './filter'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import {routes} from './routes';
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);
Vue.component('home-main', require('./components/public/PublicMaster.vue').default);

//v-form
import { Form, HasError, AlertError } from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form=Form;

//sweet
import Swal from 'sweetalert2'
window.Swal=Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast=Toast
const router = new VueRouter({
    routes, // short for `routes: routes`
    mode:'hash'
  })

const app = new Vue({
    el: '#app',router,
    store
});
