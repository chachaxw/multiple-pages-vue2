import Vue from 'vue';
import App from './app';

const vm = new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
});
