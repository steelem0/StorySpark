x<template>
  <footer class="bg-gray-100 py-6 mt-12">
    <div class="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
      <p>© {{ year }} StorySpark. Crafted with ☕ & ⚡ by Marcy Steele.</p>
      <div class="mt-2 space-x-4">
        <a href="https://github.com/steelem0" target="_blank" class="hover:text-purple-700">GitHub</a>
        <a href="https://marcysteele.com" target="_blank" class="hover:text-purple-700">Portfolio</a>
        <a href="https://substack.com/@upturnedmiddle" target="_blank" class="hover:text-purple-700">Substack</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
