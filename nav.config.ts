import { IConfig } from './src/types'

const c: IConfig = {
  // Deployment language - 部署语言
  // zh-CN | en
  language: 'en',

  // [Mondatory], Please replace following Github url with your own Github address which you forked in.
  // [必填], 请填写您的仓库地址
  gitRepoUrl: 'https://github.com/askfriends/nav',

  // Deployment branch name
  // 部署分支
  branch: 'main',

  // Page Loading: loading1 | loading2 | loading3 | random
  // If you have a good-looking Loading, please contact us!
  // 页面Loading: loading1 | loading2 | loading3 | random
  // 如果您有好看的加载Loading请联系我们！
  loading: 'random', // 随机加载

  // Whether the route is in Hash mode, if it is deployed on github pages, it must be set to true
  // 路由是否Hash模式, 如果是部署在github pages 务必设为 true
  hashMode: true,

  // Whether to show the Github icon in the upper right corner
  // 是否显示右上角的 Github 图标
  showGithub: true,

  // Your website address is good for SEO
  // 您的网站地址，有利于SEO
  homeUrl: 'https://nav3.cn',

  // Site title
  // 网站标题
  title: 'Bookmarks - Best Websites',

  // Site description
  // 网站描述
  description: 'My collection of useful websites around the globe',

  // Site keywords
  // 网站关键字
  keywords: 'bookmarks, best websites, best github repos, best telegram bots, gdrive tools',

  // Default theme: Light | Sim | Side | App | Shortcut
  // 默认主题: Light | Sim | Side | App | Shortcut
  theme: 'Light',

  // The content at the bottom of the website, copyright information, record number, can be HTML
  // 网站底部内容, 版权信息、备案号, 可以是 HTML
  footerContent: `
    <div style="font-weight: bold;">Total \${total} websites added!</div>
    <div>Copyright © 2018-2021, All Rights Reserved</div>
  `,

  // Alibaba Vector Gallery https://www.iconfont.cn/
  // Used in side theme level 1 and level 2 menu icon display
  // 阿里巴巴矢量图库 https://www.iconfont.cn/
  // 用在 Side 主题一级、二级菜单图标展示
  iconfontUrl: '//at.alicdn.com/t/font_2522843_wl70o31sy6.js',

  // Baidu Statistics Address
  // 百度统计地址
  // https://tongji.baidu.com/web/welcome/login
  baiduStatisticsUrl: 'https://hm.baidu.com/hm.js?4582be7af7e7c95ef75351e07c6c32ba',

  // CNZZ Statistics address
  // CNZZ 统计地址
  // https://www.cnzz.com/o_index.php
  cnzzStatisticsUrl: '',

  // Sim Theme configuration
  // Sim 主题配置
  simThemeConfig: {
    // Poster illustration - 海报图
    posterImageUrls: [
      'https://raw.sevencdn.com/xjh22222228/nav/image/sim-wallpaper.jpg'
    ],
    description: 'Up to <b>${total}</b> A quality website to help you work, study and live'
  }
}

export default c
