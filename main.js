import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'

import './style.scss'
import App from './App.vue'
import home from './components/home.vue'
import blogIndex from './components/blogIndex.vue'
import blogContent from './components/blogContent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Define a route for the /blog/ path
    { path: '/', component: home },
    { path: '/blog/', component: blogIndex },

    // Define a route for blog posts with a dynamic slug parameter
    { path: '/blog/:slug', component: blogContent }
  ]

  
})

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      download:"Download CV",
      greeting:"Hi there, I'm",
      name:"Sergio Orozco",
      role:"Front-end Developer",
      company:"at SproutLoud Media Networks",
      tools:"Tools",
      portfolio:"Portfolio",
      aboutMe:"About Me",
      aboutP1:"I am a junior frontend developer with a passion for building user-friendly and engaging web experiences. I have a strong understanding of HTML, CSS, and JavaScript, as well as experience with a variety of frontend frameworks, including: ",
      aboutP2:"I am also proficient in agile methodologies (SAFe) and have a proven track record of working collaboratively with cross-functional teams",
      aboutP3:"I am a highly motivated and results-oriented individual with a strong work ethic and a passion for excellence. I am confident that I can make a significant contribution to your team and help you achieve your goals.",
      toolGit: "Version Control System",
      toolFigma: "User Interface Design",
      toolOpenApi: "Latest Standards Specs",
      toolCC: "Digital Design and Motion Graphics",
      toolPinia: "Store Library for Vue",
      toolTailwind: "CSS Framework",
      toolVue: "Reactive Web Components",
      toolFirebase: "Realtime Database, Storage",
      toolJavascript: "DOM Selectors, API requests",
      legalStatus: "Fetching Data Exercise",
      solarBoard: "Frontend Dashboard",
      redilLaureles: "Christian Baptist Church",
      vueShop: "E-commerce with payment gateway.",
      cvLink: "https://drive.google.com/file/d/1nWZp7ZOwks8Bs5QW5B725-24dfFSpdRR/view?usp=sharing"
    },
    es: {
      greeting:"Hey! soy",
      download:"Descargar CV",
      name:"Sergio Orozco",
      role:"Desarrollador Front-end",
      company:"en SproutLoud Media Networks",
      tools:"Herramientas",
      portfolio:"Portafolio",
      aboutMe:"Acerca de mí",
      aboutP1:"Soy desarrollador Frontend Junior apasionado por la creación de experiencias web usables y prácticas. Tengo un sólido conocimiento de HTML, CSS y JavaScript, así como experiencia con varios frameworks frontend, incluyendo:",
      aboutP2:"También tengo habilidades en metodologías ágiles (SAFe) y cuento con un historial comprobado de trabajar de manera colaborativa con equipos multifuncionales.",
      aboutP3:"Soy una persona altamente motivada y orientada a los resultados, con una sólida ética de trabajo y una pasión por la excelencia. Estoy seguro de que puedo hacer una contribución significativa a su equipo y ayudarles a alcanzar sus objetivos.",
      toolGit: "Sistema de Control de Versiones",
      toolFigma: "Diseño de interfaz de usuario",
      toolOpenApi: "Especificaciones Actualizadas",
      toolCC: "Diseño digital y animación",
      toolPinia: "Librería de VueJs",
      toolTailwind: "Framework de CSS",
      toolVue: "Componentes reactivos",
      toolFirebase: "Base de datos en tiempo real",
      toolJavascript: "Selectores del DOM, Llamados API",
      legalStatus: "Entrenamiento de APIs",
      solarBoard: "Portal web Informativo",
      redilLaureles: "Sitio web Iglesia Cristiana",
      vueShop: "Tienda con pasarela de pago",
      cvLink: "https://drive.google.com/file/d/1ejb8mxauWs89YloocfUZoO5Of2YkgwJJ/view?usp=sharing"
    }
  },
})

const app = createApp(App)
app.use(i18n);
app.use(router)
app.mount('#app')