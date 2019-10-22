import { HtmlChild } from './h'
import { indexPage } from './indexPage'
import { notificationPage } from './notificationPage'
import * as data from './data'

export const pages: Record<string, readonly HtmlChild[]> = {
  'index.html': indexPage,
}

for (const notification of data.notifications) {
  pages[`notifications-${notification.slug}.html`] = notificationPage(notification)
}
