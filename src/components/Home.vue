<script setup>
</script>
<template>
  <div class="relative">
    <div class="bg2 h-[450px] w-full"></div>
    <div class="bg1 h-96 absolute top-0 w-full"></div>
  </div>
</template>
<style>
.bg1 {
  background-color: rgba(236, 182, 172, 0.85);
  -webkit-clip-path: polygon(0 0,100% 0,100% 100%,0 59%);
  clip-path: polygon(0 0,100% 0,100% 100%,0 59%);
}
.bg2 {
  background-color: rgba(236, 182, 172, 0.85);
  -webkit-clip-path: polygon(0 0,100% 0,100% 100%,0 59%);
  clip-path: polygon(0 0,100% 0,100% 69%,0% 100%);
}
</style>