import { createApp } from 'vue';
import App from './App.vue'
import router from './router';
import VueTheMask from 'vue-the-mask'
import Unicon from 'vue-unicons';
import {uniTrashAlt, uniEdit, uniCheckCircle, uniFile, uniSearch, uniSetting, uniPrint, uniEye, uniTimesCircle, uniEllipsisV,uniClipboard} from 'vue-unicons/dist/icons'
import Toast, {POSITION} from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import money from 'v-money'

Unicon.add([uniTrashAlt, uniEdit, uniCheckCircle, uniFile, uniSearch, uniSetting, uniPrint, uniEye, uniTimesCircle, uniEllipsisV,uniClipboard])
const options = {
    position: POSITION.TOP_RIGHT
};

createApp(App)
.use(router)
.use(VueTheMask)
.use(Unicon)
.use(Toast, options)
.use(money, {precision: 4})
.mount('#app');