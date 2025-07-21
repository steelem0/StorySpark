<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <span class="text-2xl font-bold text-purple-700">⚡ StorySpark</span>
      </div>
      <nav class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="text-gray-700 hover:text-purple-700 transition">Home</NuxtLink>
        <NuxtLink to="/about" class="text-gray-700 hover:text-purple-700 transition">About</NuxtLink>
        <a href="https://marcysteele.com/portfolio"  target="_blank" class="text-gray-700 hover:text-purple-700 transition">Portfolio</a>
        <DarkModeToggle />
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>
