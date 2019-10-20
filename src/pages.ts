import { HtmlChild } from './h'
import { indexPage } from './indexPage'

export const pages: Record<string, readonly HtmlChild[]> = {
  'index.html': indexPage,
}
