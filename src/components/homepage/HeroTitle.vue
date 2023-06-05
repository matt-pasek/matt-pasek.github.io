<template>
  <h1 class="text-xl xl:text-2xl text-center xl:text-left text-color leading-tight">Hey! I'm <span class="font-medium text-accent">Matt</span>, a <br /> <span id="change-text" class="font-semibold"></span></h1>
</template>

<script setup lang="ts">
import Typed from 'typed.js';
import { onMounted } from "vue";

onMounted(() => {
  const typed = new Typed('#change-text', {
    strings: ['UI/UX Designer', 'Web Developer', 'Fullstack Designer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false
  });
});
</script>