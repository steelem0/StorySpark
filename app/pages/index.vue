<template>
  <div>
    <NavHeader />

    <HeroBanner
      headline="⚡ StorySpark"
      subheading="Spark a new story with every click — an AI-powered micro-story generator for playful exploration and creativity."
    >
      <button
        @click="generateStory"
        class="mt-4 px-6 py-2 bg-white text-purple-700 font-semibold rounded shadow hover:bg-purple-100 transition"
      >
        Generate Story →
      </button>
    </HeroBanner>

    <section class="max-w-4xl mx-auto p-6">

        <p class="text-lg text-center text-gray-500 dark:text-gray-400 mb-4">
          ⚠️ Free demo: Limited to 5 story generations per hour to manage API usage.
        </p>

      <div class="bg-white dark:bg-gray-900 rounded-lg shadow p-6 mb-6">


        <div v-if="loading" class="text-center text-purple-500">
          ✨ Generating your story...
        </div>

        <div v-else-if="story">
          <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{{ story.title }}</h3>
          <p class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">{{ story.content }}</p>
        </div>

        <div v-else class="text-center text-gray-500 dark:text-gray-400">
          Click above to generate your first story.
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavHeader from '~/components/NavHeader.vue'
import HeroBanner from '~/components/HeroBanner.vue'
import AppFooter from '~/components/AppFooter.vue'
import { useGeminiStory } from '~/composables/useGeminiStory'

const story = ref(null)
const loading = ref(false)

async function generateStory() {
  loading.value = true
  story.value = null

  try {
    const generated = await useGeminiStory() // no prompt needed!
    story.value = {
      title: generated.title,
      content: generated.content
    }
  } catch (error) {
    story.value = {
      title: '⚠️ Error',
      content: error.message || 'Failed to generate story. Please try again.'
    }
    console.error(error)
  }

  loading.value = false
}
</script>
