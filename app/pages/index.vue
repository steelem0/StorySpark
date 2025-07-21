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
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <div v-if="loading" class="text-center text-purple-500">
          ✨ Generating your story...
        </div>
        <div v-else-if="story">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ story.title }}</h3>
          <p class="text-sm text-gray-700 whitespace-pre-line">{{ story.content }}</p>
        </div>
        <div v-else class="text-center text-gray-500">
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

  const prompt = 'Write a short original fantasy story with a surprising twist.'

  try {
    const generatedText = await useGeminiStory(prompt)
    story.value = {
      title: '✨ AI-Generated Story',
      content: generatedText
    }
  } catch (error) {
    story.value = {
      title: 'Error',
      content: 'Failed to generate story. Please try again.'
    }
    console.error(error)
  }

  loading.value = false
}
</script>
