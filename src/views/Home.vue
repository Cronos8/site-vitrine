<template>
    <!-- Jumbotron -->
  <div class="flex flex-col h-screen p-12 text-center bg-gray-100 text-gray-700">
    <h2 class="font-semibold text-4xl mb-4">Heading</h2>
    <h4 class="font-semibold text-xl mb-6">Subheading</h4>
    <div class="flex space-x-2 justify-center">
      <button
        type="button"
        class="inline-block px-6 py-2.5 mb-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Call to action
      </button>
    </div>

    <div class="flex space-x-2 justify-center items-end h-screen pb-12">
      <svg class="animate-bounce w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </div>
  <!-- Jumbotron -->

  <h1>Home</h1>
  <br />
  <h1>{{ $t('title') }}</h1>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
     sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
     sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
     sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
     sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>

  <div class="text-center p-12">
    <img
      src="../assets/avatar.jpg"
      class="rounded-full w-48 mb-4 mx-auto overflow-visible"
      alt="Avatar"
    />
    <h5 class="text-xl font-medium leading-tight mb-2">Alexandre Nguyen</h5>
    <p class="text-gray-500">Developper</p>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        test:"title",
      } 
    },
    name: 'home-view',
    components: {
    }
  }
  
</script>

<style>

</style>
