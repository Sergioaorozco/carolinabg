<script>
export default {
  data() {
    return {
      showMenu:false,
      lang: 'ES'
    }
  },
  methods:{
    toggleLang(){
      if (this.$i18n.locale === 'es') {
        this.lang ='EN'
        this.$i18n.locale = 'en'
      } else {
        this.lang ='ES'
        this.$i18n.locale = 'es'
      }
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
      <div class="flex gap-3 items-center">
        <button @click="toggleLang" class="hover:bg-[var(--baseColor)] rounded-lg py-1 px-3 transition-all duration-200"> <em >{{ lang }}</em> </button>
        <a @click="showMenu = true" class="hover:bg-[var(--baseColor)] rounded-full py-2 px-2 transition-all duration-200">
          <img src="/icons/menu.svg" width="30" height="30" alt="icono de menu">
        </a>
      </div>
    </nav>
    <section v-if="showMenu" class="fixed top-0 bottom-0 right-0 left-0 z-20 serif">
      <!-- ModalMenu -->
      <aside class="h-fit absolute top-0 bottom-0 right-0 left-0 m-3 z-20" v-motion-slide-top>
        <div class="fullwidth bg-white rounded-lg relative w-full flex items-center justify-center h-fit mb-5">
            <a class="hover:bg-slate-100 bg-slate-50 rounded-full py-2 px-2 transition-all duration-200 fixed top-6 right-6" href="#" @click="showMenu = false">
              <img src="/icons/close.svg" width="30" height="30" alt="icono de menu">
            </a>
          <div class="flex flex-col lg:flex-row w-screen lg:justify-between h-full">
            <a target="_blank" href="https://www.linkedin.com/in/carolinabg/" class="text-4xl font-semibold p-5 w-full h-full text-center flex justify-center items-center py-12 lg:py-40 hover:text-[var(--DarkSoftText)]">{{$t('contact')}}</a>
            <div class="lg:border-r border-b border-slate-100"></div>
            <a target="_blank" href="https://drive.google.com/file/d/103WUKBrwMDqoH-qhPRj-ZDpdxptlVwTJ/view?usp=sharing" class="text-4xl font-semibold p-5 w-full h-full text-center flex justify-center items-center py-12 lg:py-40 hover:text-[var(--DarkSoftText)]">{{$t('projects')}}</a>
            <div class="lg:border-r border-b border-slate-100"></div>
            <a target="_blank" href="https://repository.upb.edu.co/bitstream/handle/20.500.11912/7551/Los%20objetos%20condicionantes%20el%20uso%20re-adaptativo.pdf?sequence=1&isAllowed=y" class="text-4xl font-semibold p-5 w-full h-full text-center flex justify-center items-center py-12 lg:py-40 hover:text-[var(--DarkSoftText)]">{{$t(   'publications')}}</a>
          </div>
        </div>
        <div class="bg-white w-full py-5 absolute -bottom-20 left-0 rounded-lg">
          <div class="wrapper">
            <footer class="flex justify-between items-center">
              <a href="http://carolinabuitragog.com/" class="underline text-[var(--DarkText)]"><img src="/icons/CaroWeb.svg" width="80" alt=""></a>
              <figure class="flex gap-x-2">
                <a href="https://www.linkedin.com/in/carolinabg/" target="_blank"><img width="40" height="40" src="/icons/Linkedin.svg" alt="red social linkedin" class="hover:opacity-70"></a>
                <a href="https://www.behance.net/CarolinaBG" target="_blank"><img width="40" height="40" src="/icons/Behance.svg" alt="red social Behance" class="hover:opacity-70"></a>
              </figure>
            </footer>
            </div>
          </div>
      </aside>
      <figure @click="showMenu = false" class="w-screen h-screen absolute backdrop-blur-sm bg-gray-500 bg-opacity-60"></figure>
      </section>
  </div>
</template>
<style>

</style>