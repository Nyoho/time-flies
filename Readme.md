![ci status](https://github.com/Nyoho/time-flies/actions/workflows/ci.yml/badge.svg)

# Time Flies

## Usage

Install dependencies:

- `npm ci`

Run in development:

- `npm run dev`

Build for production:

- `npm run build`

Preview production build locally:

- `npm run serve`

## Accessibility

This project has two accessibility checks:

- `npm run a11y:static`
  - Runs `be-a11y` against `src`
  - Exports JSON report to `reports/be-a11y-report.json`
  - In GitHub Actions this job is **non-blocking** (`continue-on-error: true`)
- `npm run test:a11y`
  - Runs Playwright + `@axe-core/playwright` checks (`e2e/a11y.spec.ts`)
  - This is the main blocking a11y gate in CI

Related CI workflow:

- `.github/workflows/a11y.yml`

## Thanks

https://github.com/nulltask/heroku-static-provider based

## License

MIT
