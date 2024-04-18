module.exports = {
  plugins: [
    ["vuepress-plugin-auto-sidebar", {}]
  ],
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '开发用文档',
        items: [
          { text: 'Vue2', link: '/develop/vue2/' },
          { text: 'Vue3', link: '/develop/vue3/' },
          { text: 'React', link: '/develop/React/' },
          { text: 'Flutter', link: '/develop/flutter/' },
          { text: 'JavaScript', link: '/develop/js/' },
          { text: 'CSS', link: '/develop/css/' },
          { text: 'Electron', link: '/develop/Electron/' },
          { text: 'Java', link: '/develop/Java/' },
          { text: '常用命令', link: '/develop/常用命令/' },
        ]
      }
    ],
  },
}