<template>
  <div>
    <div v-for="project in projects" :key="project.id" class="lg:w-1/2 mb-8 md:mb-16">
      <h2 class="font-semibold mb-4">{{ project.projectName }}</h2>
      <p>{{ project.projectDescription }}</p>
      <div class="flex items-center mt-4">
        <a class="inline-block" :href="project.projectUrl">Visit project</a>
        <svg class="ml-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request';

export default {
  async asyncData({ $graphcms }) {
    const { projects } = await $graphcms.request(
      gql`
        {
          projects {
            projectName
            projectDescription
            projectUrl
          }
        }
      `
    );

    return { projects };
  },
};
</script>