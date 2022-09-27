import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes.js/routes'
import 'mdb-vue-ui-kit/css/mdb.min.css';


createApp(App)
.use(router)
.mount('#app')

