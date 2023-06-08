import { defineStore } from 'pinia'
import data from '../db.json'

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: data
  }),
  getters: {
    fetchJob: (state) => (id) => state.jobs.find((job) => job.id === +id),
    filterJob: (state) => (queries) =>
      state.jobs.filter((job) => {
        return (
          job.position.toLowerCase().includes(queries.title.toLowerCase()) &&
          job.location.toLowerCase().includes(queries.location.toLowerCase()) &&
          (queries.fullTimeOnlyChecked ? job.contract === 'Full Time' : 'Full Time' || 'Part Time')
        )
      })
  },
  actions: {}
})
