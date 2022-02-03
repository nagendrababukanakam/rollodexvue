// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Card from '@/components/Card/Card'
import CardList from '@/components/CardList/CardList'
import Search from '@/components/Search/Search'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  omponents: { 'App' : App, 'Card': Card, 'CardList': CardList, 'Search': Search },
  template: '<App/>'
})
