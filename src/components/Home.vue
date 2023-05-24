<template>
  <div class="flex flex-col justify-between h-screen fullwidth">
    <div>
      <mainNav/>
      <main class="bg-transparent mt-5 lg:mt-8 mb-16">
        <div class="wrapper gap-3 flex justify-between flex-col-reverse lg:flex-row items-center">
          <article class="flex flex-col md:w-1/2 write">
            <p class="text-3xl lg:text-4xl text-[var(--DarkText)] mt-2">Hola,</p>
            <h1 class="text-3xl lg:text-3xl text-[var(--DarkText)] mt-2 font-sans font-light">Soy Carolina Buitrago González, diseñadora de interiores y Gerente de Proyectos.</h1>
            <a href="https://drive.google.com/file/d/1JRPRcfbrRaAP7UneIr63g9tAwpzuKQzl/view?usp=sharing" target="_blank" class="mt-5 border border-[var(--baseDarkColor)] w-fit rounded-xl px-4 py-2 font-sans font-thin text-[var(--DarkText)] text-2xl descarga hover:bg-[var(--baseDarkColor)] transition-all duration-300">Descargar Curriculum</a>
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
        <ul class="flex flex-col lg:flex-row items-center justify-evenly lg:h-32 border border-[var(--baseDarkColor)] bg-white/25 backdrop-blur-xl rounded-xl toolSection">
          <li class="py-5 lg:py-0">Notion</li>
          <em class="divider lg:w-1 lg:h-full w-full h-0.5"></em>
          <li class="py-5 lg:py-0">Rhinoceros</li>
          <em class="divider lg:w-1 lg:h-full w-full h-0.5"></em>
          <li class="py-5 lg:py-0">Vray</li>
          <em class="divider lg:w-1 lg:h-full w-full h-0.5"></em>
          <li class="py-5 lg:py-0">Autocad</li>
          <em class="divider lg:w-1 lg:h-full w-full h-0.5"></em>
          <li class="py-5 lg:py-0">Figma</li>
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

.toolSection {
  .divider {
    background-color: var(--baseDarkColor);
  }
  li {
    width: 100%;
    padding-inline: 5em;
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