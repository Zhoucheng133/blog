module.exports = {
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
    sidebar: {
      '/develop/js/': [
        {
          title: 'JavaScript 文档',
          collapsable: true,
          children: ['', '1_类型转换和方法', '2_异步处理', '3_数组', '4_网络请求', '5_时间和日期', '6_day.js依赖']
        }
      ],
      '/develop/vue2/': [
        {
          title: 'Vue2 文档',
          collapsable: true,
          children: ['', '0_创建vue2项目', '1_管理项目', '2_router的使用', '3_项目的结构', '4_文件结构', '5_组件', '6_变量', '7_v-if和v-show', '8_v-bind', '9_v-for', '10_ref', '11_钩子函数', '12_watch', '13_methods', '14_computed', '15_v-on']
        }
      ],
      '/develop/vue3/': [
        {
          title: 'Vue3 文档',
          collapsable: true,
          children: ['', '0_创建vue项目', '1_管理项目', '2_文件结构', '3_组件', '4_变量', '5_函数', '6_计算属性', '7_监听属性', '8_获取DOM元素', '9_组合式函数', '10_钩子函数', '11_Hooks', '12_pinia']
        }
      ],
      '/develop/常用命令/': [
        {
          title: '常用命令',
          collapsable: true,
          children: ['', 'Linux命令', 'Mac命令']
        }
      ],
      '/develop/css/': [
        {
          title: 'CSS 文档',
          collapsable: true,
          children: ['', '1_常用语法', '2_各种单位', '3_三角形', '4_Grid布局', '5_动画', '6_Flex布局']
        }
      ],
      '/develop/Electron/': [
        {
          title: 'Electron 文档',
          collapsable: true,
          children: ['', '1_创建Electron项目', '2_配置Electron', '3_Electron主进程链接', '4_Electron创建菜单', '5_主进程常用', '6_添加Electron图标']
        }
      ],
      '/develop/flutter/': [
        {
          title: 'Electron 文档',
          collapsable: true,
          children: [
            '', 
            '1_保存设置', 
            '2_GestureDetector', 
            '3_网络请求', 
            '4_GetX', 
            '5_自定义TextField', 
            '6_Container样式', 
            '7_Text样式', 
            '8_桌面端窗口', 
            '9_Scaffold', 
            '10_App图标', 
            '11_MouseRegion', 
            '12_发布App', 
            '13_启动页', 
            '14_外部文件', 
            '15_本地化', 
            '16_判断前台运行', 
            '17_Dialog', 
            '18_嵌套Widget',
            '19_图标',
            '20_长度参数',
            '21_initState和dispose',
            '22_路由',
            '23_列表'
          ]
        }
      ],
      '/develop/Java/': [
        {
          title: 'Java 文档',
          collapsable: true,
          children: ['', '1_MySQL', '2_SpringBoot']
        }
      ],
      '/develop/React/': [
        {
          title: 'React 文档',
          collapsable: true,
          children: ["", "1_创建React项目", "2_文件结构", "3_变量和函数", "4_遍历列表", "5_条件判定", "6_事件绑定", "7_组件", "8_useState", "9_样式控制", "10_获取DOM元素", "11_useEffect", "12_自定义Hook"]
        }
      ],
    }
  },
}