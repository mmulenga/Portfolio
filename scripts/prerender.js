import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const { render } = await import(path.join(root, 'dist-ssr/entry-server.js'))

const templatePath = path.join(root, 'dist/index.html')
const template = fs.readFileSync(templatePath, 'utf-8')
const appHtml = render()

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html')
}

const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

fs.writeFileSync(templatePath, html)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })

console.log('Pre-rendered dist/index.html')
