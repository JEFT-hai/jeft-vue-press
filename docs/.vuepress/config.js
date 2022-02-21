/*
 * @Author: your name
 * @Date: 2022-02-18 14:08:53
 * @LastEditTime: 2022-02-21 16:14:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \npm\jeft-vue-press\docs\.vuepress\config.js
 */
module.exports = {
  title: 'jeft-vue-文档',
  description: 'jeft-vue 组件库文档',
  markdown: {
    lineNumbers: true
  },
  base: '/jeft-vuepress/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'jeft-vue-文档',
      description: 'jeft-vue 组件库中文文档',
    }
  },
  themeConfig: {
    locales: {
      '/': {
        // nav: [
        //   {
        //     text: '指南',
        //     link: '/guide/components/'
        //   },
        //   {
        //     text: 'github',
        //     link: 'https://github.com'
        //   }
        // ],
        sidebar: [
          {
            title: '介绍',   // 必要的
            path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,
          },
          
          {
            title: '组件',   // 必要的
            // path: '/guide/components/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              ['/guide/components/Bar.md', 'Bar'],
              ['/guide/components/Circle.md', 'Circle'],
              ['/guide/components/Loading.md', 'Loading'],
              ['/guide/components/LocationCity.md', 'LocationCity'],
              ['/guide/components/LocationMap.md', 'LocationMap'],
              ['/guide/components/NoticeToast.md', 'NoticeToast'],
              ['/guide/components/RequestState.md', 'RequestState'],
              ['/guide/components/Rule.md', 'Rule'],
              ['/guide/components/Steps.md', 'Steps'],
              ['/guide/components/UploadProgress.md', 'UploadProgress'],
              ['/guide/components/WaterFall.md', 'WaterFall'],
            ]
          },
          {
            title: '指令',   // 必要的
            path: '/guide/directives/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,
          },
          // {
          //   title: '指令',
          //   path: '/directives/',
          //   collapsable: true, // 可选的, 默认值是 true,
          //   sidebarDepth: 1,    // 可选的, 默认值是 1
          //   children: [
          //   ]
          // }
          // '/components/': [
          //   ['', '介绍'],
          //   {
          //     title: '组件',
          //     children: [
          //       ['../guide/components/Bar.md', 'Bar'],
          //       ['../guide/components/Circle.md', 'Circle'],
          //       ['../guide/components/Loading.md', 'Loading'],
          //       ['../guide/components/LocationCity.md', 'LocationCity'],
          //       ['../guide/components/LocationMap.md', 'LocationMap'],
          //       ['../guide/components/NoticeToast.md', 'NoticeToast'],
          //       ['../guide/components/RequestState.md', 'RequestState'],
          //       ['../guide/components/Rule.md', 'Rule'],
          //       ['../guide/components/Steps.md', 'Steps'],
          //       ['../guide/components/UploadProgress.md', 'UploadProgress'],
          //       ['../guide/components/WaterFall.md', 'WaterFall'],
          //     ]
          //   }
          // ]
        ]
      }
    }
  },
  plugins: ['@vuepress/back-to-top']
};
