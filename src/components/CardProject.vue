<template>

  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
    <a href="#" class="hidden md:block">
      <img class="rounded-t-lg" src="../assets/test.jpg" alt="" />
    </a>
    <div class="flex space-x-2 flex-start pt-6 pl-5">
      <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">Primary</span>
    </div>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ $t(mainTitle) }}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-70 text-justify">{{ $t(shortdesc) }}</p>
      <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Read more
        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </a>
      </div>
  </div>

</template>

<script>

  export default {
    props: {
      mainTitle: String,
      shortdesc: String,
      badges: { 
        type: Array,
        required: false,
      }
    }
  }
  
</script>

<style>

</style>
