import { h } from './h'

export const indexPage = [
  header(),
  membershipCard(),
  menubar(),
  notifications(),
  events(),
  scoutmedia(),
  membershipBenefits(),
]

function header() {
  return h('section', { class: 'blue-background' }, [
    h('h1', [h('img', { class: 'logo', src: 'https://partio.emmi.fi/customer/img/partio_logo_w.png' }), 'jäsenpalvelut'])
  ])
}

function membershipCard() {
  const member = {
    name: 'Matti Meikäläinen',
    memberNumber: '12345678',
    localGroup: 'Metsänkävijät',
    region: 'Pohjanmaan Partiolaiset',
  }
  return h('section', { class: 'membership-card blue-background' }, [
    h('h2', [`Hei ${member.name}`]),
    h('p', [member.localGroup]),
    h('p', [member.region]),
    h('p', [member.memberNumber]),
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
