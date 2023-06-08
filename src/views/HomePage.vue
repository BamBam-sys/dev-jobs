<script setup>
import { ref } from 'vue'

import { useJobsStore } from '../stores/jobsStore'

import UtilityBar from '../components/UtilityBar.vue'
import JobCard from '../components/JobCard.vue'
import utilityModal from '../components/utilityModal.vue'

import { queries, resetQueries, isModalVisible, toggleModal } from '../composables/queriesStore'

const jobStore = useJobsStore()

// make jobs reactive so that when it is mutated, the ui is updated
let jobs = ref(jobStore.jobs)

const search = () => {
  const filteredJobs = jobStore.filterJob(queries)

  // re-assign jobs variable to value(filtered data) returned from filterJobs
  jobs.value = filteredJobs

  //reset input field
  resetQueries()
}
</script>

<template>
  <div class="container">
    <div class="transform translate-y-[-50%]">
      <UtilityBar @toggle-modal="toggleModal" @search="search" />
    </div>

    <div
      v-show="isModalVisible"
      class="absolute top-[50%] transform translate-y-[-50%] left-[50%] translate-x-[-50%] z-10"
    >
      <utilityModal @search="search" />
    </div>

    <!-- jobs -->
    <div
      class="mt-[10.5rem] grid grid-cols-[repeat(1, minmax(350px, 1fr))] sm:grid-cols-2 md:grid-cols-3 gap-y-[4rem] gap-x-[3rem] justify-center"
    >
      <JobCard v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>
