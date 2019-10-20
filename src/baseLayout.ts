import { h, HtmlChild } from './h'

export function baseLayout(body: readonly HtmlChild[]) {
  return h('html', [
    h('head', [
      h('title', ['Suomen partiolaisten jäsenpalvelut']),
      h('meta', { charset: 'utf-8' }),
      h('meta', { name: 'theme-color', content: '#005073' }),
      h('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      }),
      h('link', { rel: 'stylesheet', href: './main.css' }),
    ]),
    h('body', body),
  ])
}
