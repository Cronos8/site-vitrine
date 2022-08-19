<template>

  <div>
    <div class="flex flex-start items-center">
      <div class="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
        <h4 class="text-gray-800 font-semibold text-xl -mt-2">{{ $t(mainTitle) }}</h4>
    </div>
    <div class="ml-6 mb-6 pb-6">
      <a href="#!" class="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">{{ $t(date) }}</a>
      <div class="text-gray-700 mt-2 mb-4 text-justify max-w-3xl">
        {{ $t(shortdesc) }}
      </div>
      <button type="button" class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
    </div> 
  </div>

</template>

<script>

  export default {
    props: {
      mainTitle: String,
      shortdesc: String,
      date: String
    }
  }
  
</script>

<style>

</style>
