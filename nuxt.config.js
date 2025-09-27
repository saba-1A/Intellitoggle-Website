export default defineNuxtConfig({
  compatibilityDate: '2025-09-25', // 

  devtools: { enabled: true },

  css: ['@/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  app: {
    head: {
      title: 'Intellitoggle Website',
      meta: [
        { name: 'description', content: 'Intellitoggle website built with Nuxt 3' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/lightlogo.png' }
      ]
    }
  }
})
