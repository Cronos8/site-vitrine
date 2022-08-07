<template>
  <!-- <img class="mx-auto" alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <HelloI18n /> -->

  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>  
</template>

<script>
  import Navigation from './components/Navigation.vue'

  export default {
    name: 'App',
    components: {
      Navigation
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
