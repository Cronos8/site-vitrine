<template>
  <nav class="bg-white shadow-lg sticky top-0">
    <div class="max-w-6xl mx-auto px-4">

       <div class="absolute py-2 px-2 inset-y-0 left-0 sm:hidden">
        <!-- Mobile menu button-->
        
        <!-- <button @click="isMenuOpen = !isMenuOpen;" class="inline-flex p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"> -->
        <button @click="isMenuOpen = !isMenuOpen;" class="inline-flex py-5 px-2 items-center space-x-2 focus:outline-none">
          <div class="w-6 flex items-center justify-center relative">
            <span v-bind:class="isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'"
                class="transform transition w-full h-px bg-current absolute"></span>
                
            <!-- <span v-bind:class="isMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'"
                class="transform transition w-full h-px bg-current absolute"></span> -->
            <span v-bind:class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
                class="transform transition w-full h-px bg-current absolute"></span>
                
            <span v-bind:class="isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'"
                class="transform transition w-full h-px bg-current absolute"></span>
          </div>
        </button>
      </div>

      <div class="sm:hidden flex justify-center">
        <div class="flex space-x-7 ">
          <div class="py-4 px-2">
            Super profil !
          </div>
        </div>
      </div>

      <!-- PC menu -->
      <div class="hidden sm:flex justify-center">
        <div class="flex space-x-7 ">
          <div class="py-4 px-2">
            <router-link to="/">{{ $t('homeMenuTitle') }}</router-link>
          </div>
          <div class="py-4 px-2">
            <router-link to="/projects">{{ $t('projectsMenuTitle') }}</router-link>
          </div>
          <div class="py-4 px-2">
            <router-link to="/resume">{{ $t('resumeMenuTitle') }}</router-link>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 py-4 px-2">
        <LocaleSwitcher />    
      </div>
    </div>

    <!-- Mobile menu, show/hide based on isMenuOpen state. -->
    <div v-if="isMenuOpen" class="sm:hidden h-screen" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <!-- <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a> -->
        <router-link to="/" @click="closeMenu" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{ $t('homeMenuTitle') }}</router-link>

        <router-link to="/projects" @click="closeMenu" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{ $t('projectsMenuTitle') }}</router-link>

        <router-link to="/resume" @click="closeMenu" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{ $t('resumeMenuTitle') }}</router-link>
      </div>
    </div>

  </nav>
</template>

<script>

  import LocaleSwitcher from "./LocaleSwitcher.vue";

  export default {
    name: 'nav-menu',
    data() {
      return {
        isMenuOpen: false,
      }
    },
    methods: {
      closeMenu() {
        this.isMenuOpen = false;
      }
    },
    components: {
      LocaleSwitcher
    }
  }
  
</script>

<style>

</style>
