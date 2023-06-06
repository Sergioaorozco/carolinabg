import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import Tooltip from 'primevue/tooltip';

// Translations


import './style.css'
import App from './App.vue'
const app = createApp(App);

// Create a new VueI18n instance
const i18n = createI18n({
  
  legacy: false,
  locale: 'es', // Set the default locale
  messages: {
    es: {
      greeting: '¡Hola!',
      summary: 'Soy Carolina Buitrago González, Diseñadora de Interiores y Gestora de Proyectos.',
      tools: 'Herramientas',
      aboutMe: 'Acerca de mí',
      aboutP1: 'Profesional en diseño industrial con experiencia en diseño de espacios comerciales, domésticos y hotelería.',
      aboutP2: 'Tengo experiencia como gerente de proyectos de arquitectura interior.',
      aboutP3: 'Me interesa crear experiencias con una mirada sensible enfocada en las personas y su entorno.',
      download: 'Descargar Curriculum',
      current: 'Actualmente en:',
      publications: 'Publicaciones',
      contact: 'Contacto',
      projects: 'Proyectos',
      portfolio: 'https://drive.google.com/file/d/103WUKBrwMDqoH-qhPRj-ZDpdxptlVwTJ/view?usp=sharing',
    },
    en: {
      greeting: 'Hi!',
      summary: 'I am Carolina Buitrago, Interior Designer and Project Manager.',
      tools: 'Tools',
      aboutMe: 'About me',
      aboutP1: 'I am an industrial design professional with experience in designing commercial, residential, and hospitality spaces.',
      aboutP2: 'I have experience as an interior architecture project manager.',
      aboutP3: 'I am interested in creating experiences with a sensitive approach focused on people and their needs.',
      download: 'Download Curriculum',
      current: 'Currently at:',
      publications: 'Publications',
      contact: 'Contact',
      projects: 'Projects',
      portfolio: 'https://drive.google.com/file/d/1lS0Y47ZS9TCRDXkIMqfP4iCMjWgh3Hpu/view?usp=sharing',
    },
  }
});


// Components
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
app.component('Sidebar', Sidebar);
app.component('Button', Button);
app.directive('tooltip', Tooltip);

app.use(i18n);
app.use(PrimeVue);
app.use(MotionPlugin);
app.mount('#app');