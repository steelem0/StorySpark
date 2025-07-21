<template>
  <section class="bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 text-white py-16 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">{{ headline }}</h1>
      <p v-if="subheading" class="text-lg md:text-xl text-purple-100 mb-6">{{ subheading }}</p>
      <slot />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  headline: String,
  subheading: String
})
</script>
