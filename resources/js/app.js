/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */


let MyTodos = Vue.component('Todos', require('./components/MyTodos.vue').default);
let AddTodo = Vue.component('Todo', require('./components/AddTodo.vue').default);
// let Myheader = require('./components/Myheader.vue');

const routes = [
  { path: '/', component: MyTodos },
  { path: '/todo/:id?', component: AddTodo , 'name': 'todo'}
]

const router = new VueRouter({
  routes 
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    components:{MyTodos, AddTodo}
});
