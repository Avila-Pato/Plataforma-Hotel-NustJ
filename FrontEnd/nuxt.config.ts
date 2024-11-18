export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/styles.css', 
    'remixicon/fonts/remixicon.css',
  ],
  plugins: [
    { src: '~/utils/navigation.js', mode: 'client' }
  ]
})
