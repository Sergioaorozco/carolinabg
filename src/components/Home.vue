<template>
  <div>
    <mainNav/>
    <section class="bg-[var(--baseColor)]">
      <div class="wrapper h-96 py-10">
        <p class="text-3xl lg:text-7xl text-[var(--DarkText)] font-semibold" v-motion-slide-right>Hi,I'm Carolina Buitrago</p>
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
:root {
  --baseColor: rgba(243, 214, 209, 0.95);
  --baseDarkColor: rgba(240, 151, 135, 0.85);
  --DarkSoftText: rgb(151, 95, 85);
  --DarkText: rgb(94, 72, 69);
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
</style>