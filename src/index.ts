import * as fs from 'fs'
import * as path from 'path'
import { renderHtml } from './h'
import { pages } from './pages'
import { baseLayout } from './baseLayout'

for (const [filename, contents] of Object.entries(pages)) {
  const filepath = path.resolve(`./dist/${filename}`)
  fs.writeFileSync(filepath, renderHtml(baseLayout(contents)))
}
