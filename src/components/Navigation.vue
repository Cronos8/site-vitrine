<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/resume">Resume</router-link>
    <br />
    <LocaleSwitcher />
  </div>
</template>

<script>

  import LocaleSwitcher from "./LocaleSwitcher.vue";

  export default {
    name: 'nav-menu',
    components: {
      LocaleSwitcher
    }
  }
  
</script>

<style>

</style>
