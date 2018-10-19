import Vue from 'vue'
import Vuex from 'vuex';
import Vuelidate from 'vuelidate'
Vue.use(Vuex);
Vue.use(Vuelidate);

import axios from 'axios'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
Vue.prototype.$http = axios;

import App from './App.vue'
import router from './router.js'


//
// import AppCarousel from './AppCarousel.vue'
// import AppLightBox from './AppLightBox.vue'
// import AppAxios from './AppAxios.vue'

// new Vue({
//     el: '#lightbox',
//     render: h => h(AppLightBox),
// })


// axios.interceptors.request.use(
//     (config) => {
//         console.log('plop');
//         return config;
//     },
// )
// axios.interceptors.response.use(
//     (response) => {
//         console.log('response');
//         return response;
//     },
// );
// new Vue({
//     el: '#axios',
//     render: h => h(AppAxios),
// })
Vue.config.devtools = true

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app');
