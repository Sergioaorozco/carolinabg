<script setup>
const social = [
  {'alt': 'LinkedIn', 'url': 'http://www.google.com', 'image': '/icons/Linkedin.svg'},
  {'alt': 'Whatsapp', 'url': 'http://www.google.com', 'image': '/icons/Whatsapp.svg'},
  {'alt': 'Behance', 'url': 'http://www.google.com', 'image': '/icons/Behance.svg'}
]
</script>
<template>
  <div>
    <section>
      <div class="relative ">
        <!-- <div class="bg2 h-[400px] top-0 absolute w-full"></div> -->
        <div class="bg1 h-auto w-full">
          <nav class="flex justify-between items-center wrapper py-4">
            <figure>
              <p class="text-2xl text-[var(--DarkText)]">Carolina Buitrago</p>
            </figure>
            <div class="flex gap-4 items-center">
              <a href="#" class="hover:underline" target="_blank" rel="noopener noreferrer">Blog</a>
              <a class="py-2 px-5 rounded-full border border-[var(--baseDarkColor)] hover:bg-[var(--baseDarkColor)] hover:text-white" href="#" target="_blank" rel="noopener noreferrer">Descargar HV</a>
            </div>
          </nav>
          <main class="wrapper py-5 flex items-center gap-3 px-10 justify-between">
            <figure class="pb-9">
              <img src="/FotoCaro.png" class="max-w-lg h-auto object-cover" alt="">
            </figure>
            <div class="flex flex-col">
              <h1 class="text-5xl font-semibold text-[var(--DarkText)]">Carolina Buitrago</h1>
              <p class="text-2xl italic font-normal text-[var(--DarkSoftText)]">Interiorista</p>
              <div class="border-b border-[var(--baseDarkColor)] my-2"></div>
              <div class="flex gap-3">
                <a v-for="item in social" :key="item.alt" :href="item.url"><img  class="w-12 h-12" :src="item.image" :alt="item.alt"></a>
              </div>

            </div>
          </main>
        </div>
      </div>
    </section>
    <div class="wrapper">
      <h3 class="text-slate-500 text-lg mt-2">Herramientas</h3>
    </div>
  </div>
</template>
<style>
:root {
  --baseColor: rgba(243, 214, 209, 0.95);
  --baseDarkColor: rgba(240, 151, 135, 0.85);
  --DarkSoftText: rgb(151, 95, 85);
  --DarkText: rgb(94, 72, 69);
}
.bg1 {
  background-color: var(--baseColor);
  -webkit-clip-path: polygon(0 0,100% 0,100% 100%,0 80%);
  clip-path: polygon(0 0,100% 0,100% 100%,0 80%);
}

.bg2 {
  background-color: var(--baseDarkColor);
  -webkit-clip-path: polygon(0 0,100% 0,100% 69%,0% 100%);
  clip-path: polygon(0 0,100% 0,100% 69%,0% 100%);
}
</style>