import { reactive, ref } from 'vue'

export const queries = reactive({
  title: '',
  location: '',
  fullTimeOnlyChecked: false
})

export function toggleCheck() {
  queries.fullTimeOnlyChecked = !queries.fullTimeOnlyChecked
}

export function resetQueries() {
  queries.fullTimeOnlyChecked = false
  queries.location = ''
  queries.title = ''
}

export const isModalVisible = ref(false)

export const toggleModal = () => (isModalVisible.value = !isModalVisible.value)
