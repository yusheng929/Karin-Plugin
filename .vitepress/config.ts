import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Karin 插件库",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '插件列表', link: '/plugins' }
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KarinJS/karin' }
    ]
  }
})