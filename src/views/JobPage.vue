<script setup>
import { useRoute } from 'vue-router'
import { useJobsStore } from '../stores/jobsStore'

const jobStore = useJobsStore()

const {
  params: { id }
} = useRoute()

const job = jobStore.fetchJob(id)
</script>
<template>
  <div class="container-ii">
    <!-- header -->
    <div
      class="hidden w-full sm:flex justify-between transform sm:translate-y-[-25%] md:translate-y-[-50%]"
    >
      <div
        :style="{ backgroundColor: job.logoBackground }"
        class="w-[14rem] flex items-center justify-center rounded-bl-[6px]"
      >
        <img :src="job.logo" alt="company logo" />
      </div>
      <div
        class="flex bg-white dark:bg-veryDarkBlue flex-1 justify-between items-center py-[4.2rem] pl-[4rem] pr-[4.3rem] rounded-tr-[6px] rounded-br-[6px]"
      >
        <div class="">
          <h3 class="font-bold text-[2.4rem] text-veryDarkBlue dark:text-white leading-[3rem]">
            {{ job.company }}
          </h3>
          <p class="text-[1.6rem] leading-[2rem] text-darkGrey mt-[1.3rem]">
            {{ job.company.toLowerCase() + '.com' }}
          </p>
        </div>
        <div>
          <button
            class="w-full bg-violet bg-opacity-[0.1] rounded-[0.5rem] font-bold text-[1.6rem] leading-[2rem] text-violet px-[2rem] pt-[1.6rem] pb-[1.2rem] hover:bg-opacity-[0.35]"
          >
            Company Site
          </button>
        </div>
      </div>
    </div>
    <!-- mobile header -->
    <div
      class="sm:hidden w-full relative flex flex-col items-center bg-white dark:bg-veryDarkBlue pt-[4.9rem] pb-[3.2rem] transform translate-y-[-10%] rounded-[6px]"
    >
      <div
        class="w-[50px] h-[50px] flex items-center justify-center rounded-[15px] absolute top-0 transform translate-y-[-50%] left-[50%] translate-x-[-50%]"
        :style="{ backgroundColor: job.logoBackground }"
      >
        <img :src="job.logo" alt="company logo" />
      </div>
      <h3
        class="font-bold text-[2.4rem] text-veryDarkBlue dark:text-white leading-[3rem] mb-[0.8rem]"
      >
        {{ job.company }}
      </h3>
      <p class="text-[1.6rem] leading-[2rem] text-darkGrey mt-[1.3rem] mb-[2.7rem]">
        {{ job.company.toLowerCase() + '.com' }}
      </p>
      <div>
        <button
          class="w-full bg-violet bg-opacity-[0.1] rounded-[0.5rem] font-bold text-[1.6rem] leading-[2rem] text-violet px-[2rem] pt-[1.6rem] pb-[1.2rem] hover:bg-opacity-[0.35]"
        >
          Company Site
        </button>
      </div>
    </div>

    <!-- body -->
    <div
      class="bg-white dark:bg-veryDarkBlue p-[2.4rem] sm:p-[4.8rem] text-[1.6rem] text-darkGrey dark:text-grey leading-[2.6rem] rounded-[6px]"
    >
      <div class="flex flex-col gap-[5rem] sm:flex-row justify-between items-center">
        <div>
          <div>
            <div class="text-darkGrey text-[1.6rem] leading-[2rem] flex items-center gap-[1.2rem]">
              <p>{{ job.postedAt }}</p>
              <div class="w-[0.4rem] h-[0.4rem] bg-darkGrey rounded-[50%]"></div>
              <p>{{ job.contract }}</p>
            </div>
          </div>
          <h2
            class="font-bold text-[2rem] text-veryDarkBlue dark:text-white leading-[2.5rem] mt-[0.8rem]"
          >
            {{ job.position }}
          </h2>
          <p class="text-[1.4rem] font-bold leading-[1.7rem] text-violet mt-[0.8rem]">
            {{ job.location }}
          </p>
        </div>
        <div class="w-full sm:w-auto">
          <button
            class="w-full bg-violet rounded-[0.5rem] font-bold text-[1.6rem] leading-[2rem] text-white pl-[2.85rem] py-[1.6rem] pr-[2.75rem] hover:bg-lightViolet"
          >
            Apply Now
          </button>
        </div>
      </div>

      <!--  -->
      <p class="mt-[4rem]">
        {{ job.description }}
      </p>

      <!--  -->
      <section class="mt-[4rem]">
        <h3 class="text-veryDarkBlue dark:text-white font-bold text-[2rem] leading-[2.5rem]">
          Requirements
        </h3>
        <p class="mt-[2.8rem]">
          {{ job.requirements.content }}
        </p>

        <ul class="mt-[2.4rem] pl-[1.8rem]">
          <li
            class="list-disc pl-[1.4rem] mt-[0.8rem]"
            v-for="item in job.requirements.items"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!--  -->
      <section class="mt-[4rem]">
        <h3 class="text-veryDarkBlue dark:text-white font-bold text-[2rem] leading-[2.5rem]">
          What You Will Do
        </h3>
        <p class="mt-[2.8rem]">
          {{ job.role.content }}
        </p>

        <ol class="mt-[2.4rem]">
          <li
            class="pl-[2.8rem] mt-[0.8rem] relative"
            v-for="(item, index) in job.role.items"
            :key="item"
          >
            <span class="absolute left-0 font-bold text-[1.6rem] leading-[2.6rem] text-violet">{{
              index + 1
            }}</span>
            {{ item }}
          </li>
        </ol>
      </section>
    </div>
  </div>

  <!-- footer -->
  <div class="bg-white dark:bg-veryDarkBlue mt-[8rem] pt-[2.5rem] pb-[2.3rem]">
    <div class="container-ii flex j justify-between items-center">
      <div class="hidden sm:block">
        <h2
          class="font-bold text-[2rem] text-veryDarkBlue dark:text-white leading-[2.5rem] mt-[0.8rem] hover:text-darkGrey"
        >
          {{ job.position }}
        </h2>
        <p class="text-[1.6rem] leading-[2rem] text-darkGrey mt-[1.2rem]">
          {{ job.company }}
        </p>
      </div>
      <div class="w-full sm:w-auto">
        <button
          class="w-full bg-violet rounded-[0.5rem] font-bold text-[1.6rem] leading-[2rem] text-white pl-[2.85rem] py-[1.6rem] pr-[2.75rem] hover:bg-lightViolet"
        >
          Apply Now
        </button>
      </div>
    </div>
  </div>
</template>
