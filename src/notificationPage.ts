import { h } from './h'
import { Notification } from './data'

export const notificationPage = (notification: Notification) => [
  h('div', [
    h('h1', [notification.title]),
    h('p', [notification.author.name]),
    ...notification.body.map(paragraph => h('p', [paragraph])),
  ])
]
