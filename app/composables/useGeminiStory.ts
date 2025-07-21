
export async function useGeminiStory() {
  const config = useRuntimeConfig()
  const apiKey = config.public.geminiApiKey

  // Step 1: Random prompt
  const genres = ['fantasy', 'sci-fi', 'mystery', 'adventure', 'romance']
  const tones = ['surprising twist', 'funny ending', 'dark atmosphere', 'uplifting vibe']

  const genre = genres[Math.floor(Math.random() * genres.length)]
  const tone = tones[Math.floor(Math.random() * tones.length)]

  const prompt = `Write a short ${genre} story with a ${tone}.`

  // Step 2: Rate limiting
  const usage = JSON.parse(localStorage.getItem('storyspark-usage')) || { count: 0, timestamp: Date.now() }
  const now = Date.now()

  // Reset count if over an hour
  if (now - usage.timestamp > 60 * 60 * 1000) {
    usage.count = 0
    usage.timestamp = now
  }

  if (usage.count >= 5) {
    throw new Error('Rate limit exceeded: Only 5 stories allowed per hour.')
  }

  usage.count += 1
  localStorage.setItem('storyspark-usage', JSON.stringify(usage))

   // Step 3: Fetch story

  const response = await $fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", {
    method: 'POST',
    query: { key: apiKey },
    body: {
      contents: [{ parts: [{ text: prompt }] }]
    },
    headers: { 'Content-Type': 'application/json' }
  })


  const text = response?.candidates?.[0]?.content?.parts?.[0]?.text || 'No story generated.'

  return { title: `✨ A ${genre} Story`, content: text }
}
