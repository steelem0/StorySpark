
export async function useGeminiStory(prompt) {
  const config = useRuntimeConfig()
  const apiKey = config.public.geminiApiKey

  const response = await $fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", {
    method: 'POST',
    query: { key: apiKey },
    body: {
      contents: [{ parts: [{ text: prompt }] }]
    },
    headers: { 'Content-Type': 'application/json' }
  })

  const text = response?.candidates?.[0]?.content?.parts?.[0]?.text || 'No story generated.'

  return text
}
