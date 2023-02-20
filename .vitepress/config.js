import { defineConfig } from 'vitepress';
import apidocConfig from '../apidocConfig.json';

export default defineConfig({
  title: 'demo文档',
  base: '/docs/',

  themeConfig: {
    nav: [
      { text: '使用指南', link: '/index' },
      { text: '工具方法', link: '/dist/readme' }
    ],
    sidebar: {
      '/dist/': apidocConfig,
    }
  }
})