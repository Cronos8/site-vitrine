<template>
  <div class="flex justify-center pt-12 pb-12">
    <h2 class="font-semibold text-4xl mb-4">Projects</h2>
  </div>

  <div class="p-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

    <card-project v-for="(project, projectIndex) in projectsList" 
    :mainTitle="project.title" 
    :shortdesc="project.shortdesc" 
    :key="projectIndex"/>

  </div>

</template>

<script>

  import CardProject from '../components/CardProject.vue'

  export default {
    name: 'project-view',
    data() {
      return {
        projectsList: [
          {
            title:"titleProject1",
            shortdesc:"shortDescProject1"
          },
          {
            title:"titleProject2",
            shortdesc:"shortDescProject2"
          },
          {
            title:"titleProject3",
            shortdesc:"shortDescProject3"
          },
          {
            title:"titleProject4",
            shortdesc:"shortDescProject4"
          },
          {
            title:"titleProject5",
            shortdesc:"shortDescProject5"
          },
          {
            title:"titleProject6",
            shortdesc:"shortDescProject6"
          },
        ]
      }
    },
    components: {
      CardProject
    }
  }
  
</script>


<style>

</style>
