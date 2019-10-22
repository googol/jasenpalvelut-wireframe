import { h } from './h'
import * as data from './data'

export const indexPage = [
  membershipCard(),
  menubar(),
  notifications(),
  events(),
  scoutmedia(),
  membershipBenefits(),
]

function membershipCard() {
  return h('section', { class: 'membership-card blue-background' }, [
    h('h2', [`Hei ${data.member.name}`]),
    h('p', [data.member.localGroup]),
    h('p', [data.member.region]),
    h('p', [data.member.memberNumber]),
  ])
}

function menubar() {
  return h('nav', { class: 'menubar blue-background' }, [
    h('p', ['navigation']),
  ])
}

function notifications() {
  return h('section', [
    h('h2', ['Ilmoitukset']),
    ...data.notifications.map(notification =>
      h('div', [
        h('h3', [notification.title]),
        h('p', [notification.shortDescription]),
        h('a', { href: `/notifications-${notification.slug}.html` }, ['Lue ilmoitus']),
      ])
    ),
    h('h3', [
      h('a', { href: '/notifications' }, ['Kaikki ilmoitukset']),
    ]),
  ])
}

function events() {
  return h('section', [
    h('h2', ['Tapahtumat']),
  ])
}

function scoutmedia() {
  return h('section', [
    h('h2', ['Partiomedia']),
  ])
}

function membershipBenefits() {
  return h('section', [
    h('h2', ['Jäsenedut']),
  ])
}
