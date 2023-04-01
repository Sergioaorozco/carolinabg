<script>
export default {
  data() {
    return {
      showMenu:false
    }
  }
}
</script>
<template>
  <div class="bg-white bg-opacity-25 py-4">
    <nav class="flex justify-between items-center wrapper">
      <figure>
        <img src="/icons/CaroWeb.svg" width="120" height="57.92" alt="logo menu caro">
      </figure>
      <div class="flex gap-4 items-center">
        <a href="#" @click="showMenu = true" class="hover:bg-rose-50 rounded-full py-2 px-2 transition-all duration-200">
          <img src="/icons/menu.svg" width="30" height="30" alt="icono de menu">
        </a>
      </div>
    </nav>
    <section v-if="showMenu" class="fixed top-0 bottom-0 right-0 left-0 z-20 serif">
      <!-- ModalMenu -->
      <aside class="bg-white fullwidth h-fit absolute top-0 bottom-0 right-0 left-0 m-3 rounded-lg z-20" v-motion-slide-top>
        <div class="wrapper relative w-full flex items-center justify-center h-full">
            <a class="hover:bg-slate-100 bg-slate-50 rounded-full py-2 px-2 transition-all duration-200 fixed top-6 right-6" href="#" @click="showMenu = false">
              <img src="/icons/close.svg" width="30" height="30" alt="icono de menu">
            </a>
          <div class="flex flex-col lg:flex-row w-screen lg:justify-between h-full">
            <a href="#" class="text-4xl font-semibold p-5 w-full h-full text-center flex justify-center items-center py-12 lg:py-40 hover:text-[var(--DarkSoftText)]">Blog</a>
            <div class="lg:border-r border-b border-slate-100"></div>
            <a href="#" target="_blank" class="text-4xl font-semibold p-5 w-full h-full text-center flex justify-center items-center py-12 lg:py-40 hover:text-[var(--DarkSoftText)]">Portafolio</a>
            <div class="lg:border-r border-b border-slate-100"></div>
            <a href="#" class="text-4xl font-semibold p-5 w-full h-full text-center flex justify-center items-center py-12 lg:py-40 hover:text-[var(--DarkSoftText)]">Proyectos</a>
          </div>
        </div>
        <div class="bg-white w-full py-5 absolute -bottom-20 left-0 rounded-lg">
          <div class="wrapper">
            <p class="font-bold italic">Social Media Section</p>

          </div>
        </div>
      </aside>
      <figure @click="showMenu = false" class="w-screen h-screen absolute backdrop-blur-sm bg-gray-500 bg-opacity-60"></figure>
      </section>
  </div>
</template>
<style>

</style>