<script setup>
import { reactive } from 'vue'
import logoIcon from '../assets/desktop/logo.svg'
import sunIcon from '../assets/desktop/icon-sun.svg'
import moonIcon from '../assets/desktop/icon-moon.svg'

// check browsers/os prefered theme
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches

// set as initial value for darkMode (true/false)
let theme = reactive({ darkMode: defaultDark })

if (defaultDark) document.documentElement.classList.add('dark')

function switchTheme() {
  theme.darkMode = !theme.darkMode
  document.documentElement.classList.toggle('dark')
}
</script>
<template>
  <header
    class="bg-[url('./assets/mobile/bg-pattern-header.svg')] sm:bg-[url('./assets/tablet/bg-pattern-header.svg')] md:bg-[url('./assets/desktop/bg-pattern-header.svg')] bg-no-repeat bg-cover bg-center h-[16rem] pt-[4.5rem] sm:rounded-bl-[10rem]"
  >
    <div class="container flex justify-between">
      <!-- logo -->
      <router-link :to="'/'">
        <img :src="logoIcon" alt="logo icon" />
      </router-link>

      <!-- theme switcher -->
      <div class="flex gap-[1.6rem] items-center">
        <img :src="sunIcon" alt="sun Icon" />
        <div
          class="bg-white w-[4.8rem] h-[2.4rem] rounded-[1.2rem] relative after:content-[' '] after:block after:w-[1.4rem] after:h-[1.4rem] after:bg-violet after:absolute after:top-[50%] after:transform after:translate-y-[-50%] after:rounded-[50%] cursor-pointer after:transition-all after:duration-200"
          :class="theme.darkMode ? 'after:translate-x-[2.8rem]' : 'after:translate-x-[0.7rem]'"
          @click="switchTheme"
        ></div>
        <img :src="moonIcon" alt="moon Icon" />
      </div>
    </div>
  </header>
</template>
