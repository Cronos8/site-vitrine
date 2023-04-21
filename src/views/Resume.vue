<template>

  <div class="flex justify-center pt-12">
    <h2 class="font-semibold text-4xl mb-4">Resume</h2>
  </div>

  <div class="flex justify-center pt-12">
    <h4 class="font-semibold text-xl mb-6">Compétences</h4>
  </div>

  
  <div class="border-b border-gray-200 flex justify-center">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li class="mr-2">
              <a href="#" class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                  <svg aria-hidden="true" class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500  dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd">
                    </path>
                  </svg>
                  Development
              </a>
          </li>
          <li class="mr-2">
              <a href="#" class="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                  <svg aria-hidden="true" class="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  Product
              </a>
          </li>
      </ul>
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
