import { NextRouter } from 'next/router'
import { TELEGRAM_THEME_COLOR } from '@/constants/telegram'

type Props = {
  router?: NextRouter
  backButton?: string
}

export const showTelegramBackButton = (router: NextRouter, href: string) => {
  if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.BackButton.show()
    window.Telegram.WebApp.BackButton.onClick(() => {
      router.push(href)
    })
  }
}

export const hideTelegramBackButton = () => {
  if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.BackButton.hide()
  }
}

export const tg = ({ router, backButton }: Props) => {
  if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
    window.Telegram.WebApp.headerColor = TELEGRAM_THEME_COLOR

    if (router && backButton) {
      window.Telegram.WebApp.BackButton.show()
      window.Telegram.WebApp.BackButton.onClick(() => {
        router.push(backButton)
      })
    } else {
      window.Telegram.WebApp.BackButton.hide()
    }
    const query = new URLSearchParams(window.Telegram.WebApp.initData)
    const user = query.get('user')

    if (user) {
      return JSON.parse(user)
    }
  }
}
