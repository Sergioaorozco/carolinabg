import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import './style.css'
import App from './App.vue'
const app = createApp(App);


// Components
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
app.component('Sidebar', Sidebar);
app.component('Button', Button);

app.use(PrimeVue);
app.use(MotionPlugin);
app.mount('#app');