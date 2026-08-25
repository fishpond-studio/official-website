import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "../pages",
  cleanUrls: true,

  title: "Fishpond Studio",
  description: "This is an Official Website for Fishpond Studio. Version 0.1.0",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Information', link: '/introduction' }
    ],

    sidebar: [
      {
        text: 'Group',
        items: [
          { text: 'About group', link: '/introduction' },
          { text: 'Connect us', link: '/connect' },
        ]
      },
      {
        text: 'Member',
        items: [
          { text: 'advan10', link: '/member/advan10' },
          { text: 'RegadPole', link: '/member/regadpole' },
          { text: 'BeiChen', link: '/member/beichen' },
          { text: '杉枫狸 ', link: '/member/shanfengfox' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
