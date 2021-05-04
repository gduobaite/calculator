import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Calculator from './components/Calculator.vue';


const router = new VueRouter({
    routes:[
      {
      path: '/calculator',
      name: 'Calculator',
      component: Calculator
      },
]})
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: router
});


