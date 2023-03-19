<script setup>
</script>
<template>
  <div>
    <section>
      <div class="relative ">
        <div class="bg2 h-[350px] w-full"></div>
        <div class="bg1 h-[400px] absolute top-0 w-full">
          <nav class="flex justify-between items-center wrapper py-4">
            <figure>
              <p class="font-bold text-2xl">Carolina Buitrago</p>
              <!-- <img src="../../public/vite.svg" alt=""> -->
            </figure>
            <ul class="flex gap-4 items-center">
              <li>Blog</li>
              <a class="py-2 px-5 rounded-full border border-[var(--baseDarkColor)] hover:bg-[var(--baseDarkColor)] hover:text-white" href="#" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <div class="wrapper">
      <h3 class="text-slate-500 text-lg">Tools</h3>
    </div>
  </div>
</template>
<style>
:root {
  --baseColor: rgba(243, 214, 209, 0.85);
  --baseDarkColor: rgba(240, 151, 135, 0.85);
}
.bg1 {
  background-color: var(--baseColor);
  -webkit-clip-path: polygon(0 0,100% 0,100% 100%,0 59%);
  clip-path: polygon(0 0,100% 0,100% 100%,0 59%);
}
.bg2 {
  background-color: var(--baseDarkColor);
  -webkit-clip-path: polygon(0 0,100% 0,100% 69%,0% 100%);
  clip-path: polygon(0 0,100% 0,100% 69%,0% 100%);
}
</style>