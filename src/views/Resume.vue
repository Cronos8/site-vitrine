<template>

  <div class="flex justify-center pt-12">
    <h2 class="font-semibold text-4xl mb-4">Resume</h2>
  </div>

  <div class="flex justify-center pt-12">
    <h4 class="font-semibold text-xl mb-6">Experience</h4>
  </div>

  <div class="flex justify-center p-12">
    <div class="border-l-2 border-blue-600 ">
      <paragraphe-resume v-for="(experience, experienceIndex) in experiencesList" 
        :mainTitle="experience.title" 
        :shortdesc="experience.shortdesc"
        :date="experience.date" 
        :key="experienceIndex"/>
    </div>
  </div>

  <div class="flex justify-center pt-12">
    <h4 class="font-semibold text-xl mb-6">Education</h4>
  </div>

  <div class="flex justify-center p-12">
    <div class="border-l-2 border-blue-600 ">
      <paragraphe-resume v-for="(experience, experienceIndex) in experiencesList" 
        :mainTitle="experience.title" 
        :shortdesc="experience.shortdesc"
        :date="experience.date" 
        :key="experienceIndex"/>
    </div>
  </div>
  
</template>

<script>

  import ParagrapheResume from '../components/ParagrapheResume.vue'

  export default {
    name: 'resume-view',
    data() {
      return {
        experiencesList: [
          {
            title:"titleExperience1",
            shortdesc:"shortDescExperienc1",
            date:"dateExperience1"
          },
          {
            title:"titleExperience2",
            shortdesc:"shortDescExperienc2",
            date:"dateExperience2"
          },
          {
            title:"titleExperience3",
            shortdesc:"shortDescExperienc3",
            date:"dateExperience3"
          },
        ]
      }
    },
    components: {
      ParagrapheResume
    }
  }
  
</script>

<style>

</style>
