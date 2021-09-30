import { IConfig } from './src/types'

const c: IConfig = {
  // [Mondatory], Please replace following Github url with your own Github address which you forked in.
  gitRepoUrl: 'https://github.com/askfriends/nav',

  // Deployment branch name
  branch: 'main',

  // Page Loading: loading1 | loading2 | loading3 | random
  // If you have a good-looking Loading, please contact us!
  loading: 'random', // Random loading
  // Whether the route is in Hash mode, if it is deployed on github pages, it must be set to true
  hashMode: true,

  // Whether to show the Github icon in the upper right corner
  showGithub: true,

  // Your website address is good for SEO
  homeUrl: 'https://nav3.cn',

  // Site title
  title: 'Discovery Navigation-Featured and useful navigation sites',

  // Site description
  description: 'Discovery Navigation-Featured and useful navigation sites',

  // Site keywords
  keywords: 'Navigation, front-end resources, community sites, designers, practical tools, learning resources, operations, network security, node.js',

  // Default theme: Light | Sim | Side | App | Shortcut
  theme: 'Light',

  // The content at the bottom of the website, copyright information, record number, can be HTML
  footerContent: `
    <div style="font-weight: bold;">Totally included\${total}Sites</div>
    <div>Copyright © 2018-2021 nav3.cn, All Rights Reserved</div>
  `,

  // Alibaba Vector Gallery https://www.iconfont.cn/
  // Used in side theme level 1 and level 2 menu icon display
  iconfontUrl: '//at.alicdn.com/t/font_2522843_wl70o31sy6.js',

  // Baidu Statistics Address
  // https://tongji.baidu.com/web/welcome/login
  baiduStatisticsUrl: 'https://hm.baidu.com/hm.js?4582be7af7e7c95ef75351e07c6c32ba',

  // CNZZ Statistics address
  // https://www.cnzz.com/o_index.php
  cnzzStatisticsUrl: '',

  // Sim Theme configuration
  simThemeConfig: {
    // Poster illustration
    posterImageUrls: [
      'https://raw.sevencdn.com/xjh22222228/nav/image/sim-wallpaper.jpg'
    ],
    description: 'Up to <b>${total}</b> A quality website to help you work, study and live'
  }
}

export default c
