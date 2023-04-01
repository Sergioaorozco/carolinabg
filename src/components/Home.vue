<template>
  <div class="flex flex-col justify-between h-screen fullwidth">
      <mainNav/>
      <section class="bg-transparent mt-5 lg:mt-8 mb-5">
        <div class="wrapper gap-3 flex justify-between flex-col-reverse lg:flex-row items-center">
          <article class="flex flex-col lg:w-5/12 write">
            <p class="text-3xl lg:text-4xl text-[var(--DarkText)] mt-2">Hola,</p>
            <p class="text-3xl lg:text-3xl text-[var(--DarkText)] mt-2 font-sans font-light">Soy Carolina Buitrago González, diseñadora de interiores y project manager.</p>
            <a href="https://drive.google.com/file/d/1JRPRcfbrRaAP7UneIr63g9tAwpzuKQzl/view?usp=sharing" target="_blank" class="mt-5 border-2 border-[var(--baseDarkColor)] rounded-xl px-4 py-2 font-sans font-semibold lg:w-1/2 text-[var(--DarkText)] text-2xl descarga hover:bg-[var(--baseDarkColor)] transition-all duration-300">Descargar Curriculum</a>
          </article>
          <figure class="relative" v-motion-slide-right>
            <img width="300" height="300" class="lg:w-96" src="/background/perfilCaro.webp" alt="foto principal del perfil de caro">
            <div class="flex place-items-center justify-center absolute right-0 bottom-5">
              <img class="role" width="100" height="100" src="/icons/spinText.svg" alt="Roles de Carolina Buitrago">
              <img width="80" height="80" class="absolute p-2" src="/icons/isotipo.svg" alt="Isotipo de Carolina Buitrago">
            </div>
          </figure>
        </div>
      </section>
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
<style>
.descarga::before {
  content: '';
  background: url('/icons/dowloa.svg');
  background-size: cover;
  display: block;
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

/* ENDLESS ROTATE */
.role{
  animation: rotate 15s linear infinite; 
}
@keyframes rotate{
  to{ transform: rotate(360deg); }
}

</style>