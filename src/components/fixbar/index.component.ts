// Copyright @ 2018-2021 xiejiahe. All rights reserved. MIT license.
// See https://github.com/xjh22222228/nav

import config from'../../../nav.config'
import {Component, Output, EventEmitter, Input, ChangeDetectionStrategy} from'@angular/core'
import {isDark as isDarkFn, randomBgImg, queryString} from'../../utils'
import {NzModalService} from'ng-zorro-antd/modal'
import {NzMessageService} from'ng-zorro-antd/message'
import {NzNotificationService} from'ng-zorro-antd/notification'
import {getToken} from'../../utils/user'
import {updateFileContent} from'../../services'
import {websiteList} from'../../store'
import {DB_PATH, KEY_MAP, VERSION, STORAGE_KEY_MAP} from'../../constants'
import {Router, ActivatedRoute} from'@angular/router'
import {setAnnotate} from'../../utils/ripple'

@Component({
  selector:'app-fixbar',
  templateUrl:'./index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FixbarComponent {
  @Input() showCollapse: boolean = true
  @Input() collapsed: boolean
  @Input() selector: string
  @Output() onCollapse = new EventEmitter()

  websiteList = websiteList
  isDark: boolean = isDarkFn()
  showCreateModal = false
  syncLoading = false
  isLogin = !!getToken()
  themeList = [
    {
      name:'Switch to Light',
      url:'/light'
    },
    {
      name:'Switch to Sim',
      url:'/sim'
    },
    {
      name:'Switch to Side',
      url:'/side'
    },
    {
      name:'Switch to Shortcut',
      url:'/shortcut'
    },
    {
      name:'Switch to App',
      url:'/app'
    }
  ]

  constructor(
    private message: NzMessageService,
    private notification: NzNotificationService,
    private modal: NzModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    if (isDarkFn()) {
      document.documentElement.classList.add('dark-container')
    }

    const url = this.router.url.split('?')[0]
    this.themeList = this.themeList.filter(t => {
      return t.url !== url
    })
  }

  viewInfo() {
    const date = document.getElementById('META-NAV')?.dataset?.date

    this.modal.info({
      nzWidth: 500,
      nzTitle:'The following information can only be viewed by you, please rest assured! ',
      nzOkText:'Got it',
      nzContent: `
        <p>Token: ${getToken()}</p>
        <p>Deployment branch: ${config.branch}</p>
        <p>Last build time: ${date ||'unknown'}</p>
        <p>Current version: <img src="https://img.shields.io/badge/release-v${VERSION}-red.svg?longCache=true&style=flat-square"></p>
        <p>Latest version: <img src="https://img.shields.io/github/v/release/xjh22222228/nav" /></p>
      `,
    });
  }

  toggleTheme(theme) {
    this.router.navigate([theme.url], {
      queryParams: queryString()
    })
    this.removeBackground()
    setTimeout(() => {
      setAnnotate()
    }, 100)
  }

  goTop() {
    if (this.selector) {
      const el = document.querySelector(this.selector)
      if (el) {
        el.scrollTop = 0
      }
      return
    }

    window.scrollTo({
      top: 0,
      behavior:'smooth'
    })
  }

  collapse() {
    this.onCollapse.emit()
  }

  removeBackground() {
    const el = document.getElementById('random-light-bg')
    el?.parentNode?.removeChild?.(el)
  }

  toggleMode() {
    this.isDark = !this.isDark
    window.localStorage.setItem(STORAGE_KEY_MAP.isDark, String(Number(this.isDark)))
    document.documentElement.classList.toggle('dark-container')

    if (this.isDark) {
      this.removeBackground()
    } else {
      const {data} = this.activatedRoute.snapshot
      data?.renderLinear && randomBgImg()
    }
  }

  toggleModal() {
    if (this.isLogin) {
      this.removeBackground()
      this.router.navigate(['admin'])
      return
    }
    this.showCreateModal = !this.showCreateModal
  }

  handleSync() {
    if (this.syncLoading) {
      this.message.warning('Please do not operate frequently')
      return
    }

    this.modal.info({
      nzTitle:'Sync data to remote',
      nzOkText:'OK to sync',
      nzContent:'Are you sure to synchronize all data to the remote? ',
      nzOnOk: () => {
        this.syncLoading = true;

        updateFileContent({
          message:'update db',
          content: JSON.stringify(this.websiteList),
          path: DB_PATH
        })
        .then(() => {
          this.message.success('Synchronization is successful, it takes about 5 minutes to build time')
        })
        .catch(res => {
          this.notification.error(
            `Error: ${res?.response?.status ?? 1401}`,
            'Sync failed, please try again'
          )
        })
        .finally(() => {
          this.syncLoading = false
        })
      }
    });
  }
}
