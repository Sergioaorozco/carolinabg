<template>
  <div>
      <mainNav/>
      <section class="bg-transparent mt-5 lg:mt-8">
        <div class="wrapper gap-3 flex justify-between flex-col-reverse lg:flex-row">
          <div class="flex flex-col lg:w-1/3">
            <p class="text-3xl lg:text-5xl text-[var(--DarkText)] font-semibold mt-2">Hola,</p>
            <p class="text-3xl lg:text-3xl text-[var(--DarkText)] font-semibold mt-2">soy Carolina Buitrago González, diseñadora de interiores y project manager.</p>
          </div>
          <figure class="relative" v-motion-slide-right>
            <img width="300" height="300" class="lg:w-96" src="/background/perfilCaro.webp" alt="foto principal del perfil de caro">
            <div class="flex place-items-center justify-center absolute right-0 bottom-5">
              <img class="role" width="100" height="100" src="/icons/spinText.svg" alt="Roles de Carolina Buitrago">
              <img width="80" height="80" class="absolute p-2" src="/icons/isotipo.svg" alt="Isotipo de Carolina Buitrago">
            </div>
          </figure>
        </div>
      </section>
  </div>
  
</template>
<script>
import mainNav from './mainNav.vue'
export default {
  components: {
    mainNav
  }
}

</script>
<style>

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