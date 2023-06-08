<script setup>
const props = defineProps({
  job: {
    required: true
  }
})
</script>
<template>
  <router-link
    :to="`/job/${props.job.id}`"
    class="bg-white dark:bg-veryDarkBlue pt-[4.9rem] px-[3.2rem] pb-[3.3rem] rounded-[0.6rem] relative cursor-pointer"
  >
    <div
      class="w-[50px] h-[50px] flex items-center justify-center rounded-[15px] absolute top-0 transform translate-y-[-50%] left-0 translate-x-[50%]"
      :style="{ backgroundColor: props.job.logoBackground }"
    >
      <img :src="props.job.logo" alt="company logo" />
    </div>
    <div class="text-darkGrey text-[1.6rem] leading-[2rem] flex items-center gap-[1.2rem]">
      <p>{{ props.job.postedAt }}</p>
      <div class="w-[0.4rem] h-[0.4rem] bg-darkGrey rounded-[50%]"></div>
      <p>{{ props.job.contract }}</p>
    </div>
    <h2
      class="font-bold text-[2rem] text-veryDarkBlue dark:text-white leading-[2.5rem] mt-[1.2rem] hover:text-darkGrey"
    >
      {{ props.job.position }}
    </h2>
    <p class="text-[1.6rem] text-darkGrey leading-[2rem] mt-[1.2rem]">{{ props.job.company }}</p>
    <p class="text-[1.4rem] font-bold leading-[1.7rem] text-violet mt-[4rem]">
      {{ props.job.location }}
    </p>
  </router-link>
</template>
