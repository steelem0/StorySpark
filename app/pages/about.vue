<template>
  <div>
    <NavHeader />

    <section class="max-w-3xl mx-auto p-6 text-center">
      <h1 class="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-300 mb-4">
        About StorySpark
      </h1>

      <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
        StorySpark is a modular, AI-powered micro-story generator — designed to explore how technology, creativity, and interaction come together to create playful, engaging narrative experiences.
      </p>

      <div class="text-left space-y-4">
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Built with Nuxt 4, Vue 3 Composition API, Tailwind CSS, and the Google Gemini API, StorySpark brings together cutting-edge AI with carefully crafted UI components. Users can generate original short stories, explore themes like fantasy and sci-fi, and enjoy a beautifully responsive interface — complete with dark mode.
        </p>

        <p class="text-sm text-gray-700 dark:text-gray-300">
          The project showcases modular system design, from reusable components and composables to scalable architecture patterns. It emphasizes clean code, flexible theming, and future-ready integrations, reflecting my passion for both creative technology and thoughtful engineering.
        </p>

        <p class="text-sm text-gray-700 dark:text-gray-300">
          StorySpark is part of a growing portfolio of interactive tools and experiments at the intersection of design, AI, and innovation. It serves as a playground for testing ideas in generative storytelling, user experience, and micro-application design.
        </p>

        <p class="text-sm text-gray-700 dark:text-gray-300">
          Created and maintained by <strong class="text-purple-700 dark:text-purple-300">Marcy Steele</strong>, this project is a living demonstration of how small, intentional systems can deliver big creative impact.
        </p>
      </div>

      <div class="mt-6">
        <NuxtLink
          to="/"
          class="inline-block px-6 py-2 bg-purple-700 dark:bg-purple-500 text-white dark:text-gray-900 rounded shadow hover:bg-purple-800 dark:hover:bg-purple-400 transition"
        >
          ← Back to Home
        </NuxtLink>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import NavHeader from '~/components/NavHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
