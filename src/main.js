import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/common.css'

const app = createApp(App)

// axios의 request 인터셉터 등록
axios.interceptors.request.use(config => {
    // 여기에서 config 수정 가능
    config.baseURL = 'http://localhost:8081/api';
    return config;
  });
  
app.config.globalProperties.$axios = axios;  //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음
app.config.globalProperties.$serverUrl = 'http://localhost:8081/api' //api server
app.config.globalProperties.$store = store
app
    .use(router)
    .use(store)
    .mount('#app')
