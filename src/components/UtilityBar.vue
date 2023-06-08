<script setup>
import { queries, toggleCheck } from '../composables/queriesStore'

import locationIcon from '../assets/desktop/icon-location.svg'
import { CheckIcon } from '@heroicons/vue/24/solid'

// emits
defineEmits(['toggleModal', 'search'])
</script>

<template>
  <div class="hidden sm:flex bg-white dark:bg-veryDarkBlue h-[8rem] rounded-[0.6rem]">
    <div
      class="basis-[46.3rem] px-[3.2rem] flex gap-[1.6rem] items-center after:content-[' '] after:w-[1px] after:h-full after:bg-darkGrey after:opacity-[0.2] after:block"
    >
      <!-- <img :src="searchIcon" alt="search icon" /> -->
      <input
        class="w-full text-[1.6rem] bg-transparent text-veryDarkBlue dark:text-white placeholder:text-[1.6rem] placeholder:text-veryDarkBlue dark:placeholder:text-white placeholder:text-opacity-[0.5] outline-none caret-violet cursor-pointer"
        type="text"
        v-model="queries.title"
        placeholder="Filter by title, companies, expertise..."
      />
    </div>
    <div
      class="basis-[30rem] px-[2.3rem] flex gap-[1.6rem] items-center after:content-[' '] after:w-[1px] after:h-full after:bg-darkGrey after:opacity-[0.2] after:block"
    >
      <img :src="locationIcon" alt="filter by location" />
      <input
        class="w-full text-[1.6rem] bg-transparent text-veryDarkBlue dark:text-white placeholder:text-[1.6rem] placeholder:text-veryDarkBlue dark:placeholder:text-white placeholder:text-opacity-[0.5] outline-none caret-violet cursor-pointer"
        type="text"
        v-model="queries.location"
        placeholder="Filter by location..."
      />
    </div>
    <div
      class="shrink-0 pl-[3.2rem] pr-[2.6rem] text-veryDarkBlue font-bold text-[1.6rem] flex items-center gap-[1.6rem]"
    >
      <div>
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
      </div>
      <p class="cursor-pointer dark:text-white" @click="toggleCheck">Full Time Only</p>
    </div>
    <div class="flex-1 flex items-center justify-center pr-[1.6rem]">
      <button
        @click="$emit('search')"
        class="w-full bg-violet rounded-[0.5rem] font-bold text-[1.6rem] leading-[2rem] text-white px-[3.55rem] pt-[1.6rem] pb-[1.2rem] hover:bg-lightViolet"
      >
        Search
      </button>
    </div>
  </div>

  <!-- mobile utility bar -->
  <div
    class="bg-white dark:bg-veryDarkBlue h-[8rem] rounded-[0.6rem] flex items-center gap-[2.4rem] sm:hidden pl-[2.4rem] pr-[1.6rem]"
  >
    <input
      class="flex-1 text-[1.6rem] bg-transparent text-veryDarkBlue dark:text-white placeholder:text-[1.6rem] placeholder:text-veryDarkBlue dark:placeholder:text-white placeholder:text-opacity-[0.5] outline-none caret-violet cursor-pointer"
      type="text"
      v-model="queries.title"
      placeholder="Filter by title..."
    />
    <svg
      class="text-darkGrey dark:text-white cursor-pointer"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      @click="$emit('toggleModal')"
    >
      <path
        d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
        fill="currentColor"
        fill-rule="nonzero"
      />
    </svg>
    <div
      @click="$emit('search')"
      class="bg-violet h-[4.8rem] w-[4.8rem] rounded-[0.6rem] flex justify-center items-center cursor-pointer"
    >
      <svg class="text-white" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
          fill="currentColor"
          fill-rule="nonzero"
        />
      </svg>
    </div>
  </div>
</template>
