import { spawnSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

const inputPath = process.argv[2] ?? 'src'
const outputPath = process.argv[3] ?? 'reports/be-a11y-report.json'

mkdirSync('reports', { recursive: true })

let beA11yEntry
try {
  beA11yEntry = require.resolve('@belenkadev/be-a11y/index.js')
} catch {
  console.error('Failed to resolve @belenkadev/be-a11y. Run `npm ci` first.')
  process.exit(1)
}

const result = spawnSync(process.execPath, [beA11yEntry, inputPath, outputPath], {
  stdio: 'inherit',
})

if (result.error) {
  console.error(result.error.message)
  process.exit(1)
}

process.exit(result.status ?? 1)
