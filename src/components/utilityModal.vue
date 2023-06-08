<script setup>
import { queries, toggleCheck, toggleModal } from '../composables/queriesStore'

import loacationIcon from '../assets/desktop/icon-location.svg'
import { CheckIcon } from '@heroicons/vue/24/solid'

const emit = defineEmits(['search'])

function search() {
  emit('search')
  toggleModal()
}
</script>

<template>
  <div class="w-[32.7rem] bg-white dark:bg-veryDarkBlue rounded-[0.6rem] shadow-i">
    <div class="flex items-center gap-[1.6rem] p-[2.4rem]">
      <img :src="loacationIcon" alt="location icon" />
      <input
        class="w-full text-[1.6rem] bg-transparent text-veryDarkBlue placeholder:text-[1.6rem] placeholder:leading-[2rem] placeholder:text-veryDarkBlue dark:placeholder:text-white placeholder:text-opacity-[0.5] outline-none caret-violet cursor-pointer"
        type="text"
        v-model="queries.location"
        placeholder="Filter by location..."
      />
    </div>
    <div class="h-[1px] w-full bg-violet opacity-[0.2]"></div>
    <div class="p-[2.4rem]">
      <div class="flex items-center gap-[1.6rem] mb-[2.4rem]">
        <div
          class="relative cursor-pointer w-[2.4rem] h-[2.4rem] appearance-none"
          :class="
            queries.fullTimeOnlyChecked
              ? 'bg-violet'
              : 'bg-veryDarkBlue dark:bg-white dark:bg-opacity-[0.1] bg-opacity-[0.1]'
          "
          @click="toggleCheck"
        >
          <CheckIcon
            class="text-white w-[2rem] absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
            :class="queries.fullTimeOnlyChecked ? 'opacity-100' : 'opacity-0'"
          />
        </div>
        <p
          class="text-veryDarkBlue font-bold text-[1.6rem] cursor-pointer dark:text-white"
          @click="toggleCheck"
        >
          Full Time Only
        </p>
      </div>
      <button
        @click="search"
        class="w-full bg-violet rounded-[0.5rem] font-bold text-[1.6rem] leading-[2rem] text-white px-[3.55rem] pt-[1.6rem] pb-[1.2rem] hover:bg-lightViolet"
      >
        Search
      </button>
    </div>
  </div>
</template>
