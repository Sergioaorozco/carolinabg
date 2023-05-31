<template>
  <div class="flex flex-col justify-between h-screen fullwidth">
    <div class="mb-10">
      <mainNav/>
      <main class="bg-transparent mt-5 lg:mt-8 mb-16">
        <div class="wrapper gap-3 flex justify-between flex-col-reverse lg:flex-row items-center">
          <article class="flex flex-col md:w-1/2 write">
            <p class="text-3xl lg:text-4xl text-[var(--DarkText)] mt-2">Hola,</p>
            <h1 class="text-3xl lg:text-3xl text-[var(--DarkText)] mt-2 font-sans font-light">Soy Carolina Buitrago González, diseñadora de interiores y Gerente de Proyectos.</h1>
            <a href="https://drive.google.com/file/d/1JRPRcfbrRaAP7UneIr63g9tAwpzuKQzl/view?usp=sharing" target="_blank" class="flex items-center gap-x-2 bg-white/25 mt-5 border border-[var(--baseDarkColor)] lg:w-fit w-full rounded-xl px-4 py-2 font-sans font-light text-[var(--DarkText)] text-2xl hover:bg-[var(--baseDarkColor)] transition-all duration-300 descarga">Descargar Curriculum</a>
          </article>
          <figure class="relative" v-motion-slide-bottom>
            <img width="300" height="300" class="lg:w-96" src="/background/perfilCaro.webp" alt="foto principal del perfil de caro">
            <div class="flex place-items-center justify-center absolute right-0 bottom-5">
              <img class="role" width="100" height="100" src="/icons/spinText.svg" alt="Roles de Carolina Buitrago">
              <img width="80" height="80" class="absolute p-2" src="/icons/isotipo.svg" alt="Isotipo de Carolina Buitrago">
            </div>
          </figure>
        </div>
      </main>
      <!-- Herramientas -->
      <section class="wrapper w-fit">
        <h2 class="mb-3 text-[var(--DarkText)] write text-3xl">Herramientas</h2>
        <ul class="grid grid-cols-2 lg:flex lg:flex-row items-center justify-evenly lg:h-32 lg:border lg:border-[var(--baseDarkColor)] bg-white/25 backdrop-blur-xl rounded-xl toolSection">
          <li v-tooltip.top="'Notion'"  class="py-5 rounded-tl-lg lg:py-0 border border-[var(--baseDarkColor)] lg:border-none hover:bg-white/40 transition-colors duration-200"><img class="w-16" height="65" width="65" src="/icons/Notion-logo.svg" alt="logo herramientas Notion"></li>
          <em class="hidden lg:block divider lg:w-1 lg:h-full w-full h-0.5"></em>
          <li v-tooltip.top="'Rhinoceros'"  class="py-5 rounded-tr-lg lg:py-0 border border-[var(--baseDarkColor)] lg:border-none hover:bg-white/40 transition-colors duration-200"><img class="w-16" height="65" width="65" src="/icons/rhino.svg" alt="logo herramientas Rhinoceros"></li>
          <em class="hidden lg:block divider lg:w-1 lg:h-full w-full h-0.5"></em>
          <li v-tooltip.top="'V-ray'"  class="py-5 rounded-bl-lg lg:py-0 border border-[var(--baseDarkColor)] lg:border-none hover:bg-white/40 transition-colors duration-200"><img class="h-16" height="65" src="/icons/vray.svg" alt="logo herramientas Vray"></li>
          <em class="hidden lg:block divider lg:w-1 lg:h-full w-full h-0.5"></em>
          <li v-tooltip.top="'Autocad'"  class="py-5 rounded-br-lg lg:py-0 border border-[var(--baseDarkColor)] lg:border-none hover:bg-white/40 transition-colors duration-200"><img class="h-16" height="65" src="/icons/Autocad.svg" alt="logo herramientas Autocad"></li>
        </ul>
      </section>
    </div>
      <mainFooter/>
  </div>
</template>

<script>
import mainNav from './mainNav.vue'
import mainFooter from './mainFooter.vue'
export default {
  components: {
    mainNav,mainFooter
  }
}

</script>
<style lang="scss" scoped>
.descarga::before {
  content: "";
    background: url("/icons/download.svg");
    background-size: cover;
    width: 1.5em;
    height: 1.5em;
    color: var(--baseDarkColor);
    display: inline-block;
}

.v--vtt-fade {
  will-change: transform, opacity;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
 
.v--vtt-fade_visible {
  opacity: 1;
  transform: translateY(0);
}
 
.v--vtt-fade_hidden {
  opacity: 0;
  transform: translateY(20px);
}

.toolSection {
  .divider {
    background-color: var(--baseDarkColor);
  }
  li {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    place-items: center;
  }
}

/* ENDLESS ROTATE */
.role{
  animation: rotate 30s linear infinite; 
}
@keyframes rotate{
  to{ transform: rotate(360deg); }
}


</style>