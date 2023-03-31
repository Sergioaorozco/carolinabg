<template>
  <div>
    <!-- <main class="bg-black"> -->
      <mainNav/>
      <section class="bg-transparent">
        <div class="wrapper h-96 py-10">
          <p class="text-3xl lg:text-7xl text-[var(--DarkText)] font-semibold" v-motion-slide-right>Carolina Buitrago</p>
        </div>
      </section>
    <!-- </main> -->
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
</style>